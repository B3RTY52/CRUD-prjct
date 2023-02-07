import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

function App() {

    const data = [
        { name: "John K.", salary: 800, increase: false, id: 1 },
        { name: "Alex M.", salary: 1200, increase: true, id: 2 },
        { name: "Ivan I.", salary: 1800, increase: false, id: 3 }
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    );
}

export default App;