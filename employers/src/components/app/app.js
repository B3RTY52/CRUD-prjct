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
                { name: "John K.", salary: 800, increase: false, rise: true, id: 1 },
                { name: "Alex M.", salary: 1200, increase: true, rise: false, id: 2 },
                { name: "Ivan I.", salary: 1800, increase: false, rise: false, id: 3 }
            ],
            term: ''
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
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxID++
        }

        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    // onToggleIncrease = (id) => {
    // this.setState(({ data }) => {

    //     const index = data.findIndex(elem => elem.id === id);

    //     const old = data[index];
    //     const newItem = { ...old, increase: !old.increase };
    //     const newArr = [...data.slice(0, index), newItem,
    //     ...data.slice(index + 1)];

    //     return {
    //         data: newArr
    //     }
    // })
    //     this.setState(({ data }) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, increase: !item.increase }
    //             }
    //             return item;
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return this.state.data;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        // сокращение от "term: term":
        this.setState({ term });
    }

    render() {
        const { data, term } = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    // onToggleIncrease={this.onToggleIncrease}
                    onToggleProp={this.onToggleProp} />

                <EmployeesAddForm
                    onAdd={this.onAdd} />
            </div>
        );
    }
}

export default App;