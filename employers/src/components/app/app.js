import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: "John K.", salary: 800, increase: false, id: 1 },
                { name: "Alex M.", salary: 1200, increase: true, id: 2 },
                { name: "Ivan I.", salary: 1800, increase: false, id: 3 }
            ]
        }
        this.maxID = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }

            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];
            // return {
            //     data: newArr
            // }
        })
    }

    onAdd = (name, salary) => {
        const newArr = [
            {
                name: name,
                salary: salary,
                increase: false,
                id: this.maxID++
            }
        ];
        this.setState(({ data }) => {
            return {
                data: [...data, ...newArr]
            }
        })
    }



    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployeesAddForm onAdd={this.onAdd} />
            </div>
        );
    }
}

export default App;