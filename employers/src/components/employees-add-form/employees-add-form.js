import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    // оптимизация с добавлением в селектор атрибута name
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAdd = () => {
        document.querySelector('.add-form').addEventListener('submit', (e) => {

        });
    }

    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        //контролируемый элемент:
                        value={name} //обязательно записывать атрибуть VALUE
                        onChange={this.onValueChange} />
                    <input
                        type="number"
                        placeholder="З/П в $?"
                        className="form-control new-post-label"
                        name='salary'
                        //контролируемый элемент:
                        value={salary} //обязательно записывать атрибуть VALUE
                        onChange={this.onValueChange} />

                    <button
                        type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;