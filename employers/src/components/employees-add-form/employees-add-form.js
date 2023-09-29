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

    onSubmit = (el) => {
        el.preventDefault();

        const { name, salary } = this.state;

        // Проверяем, что длина введенных значений name и salary больше или равна 3
        if (name.length >= 3 && salary.length >= 3) {
            this.props.onAdd(name, salary);

            // Очищаем инпуты после добавления элемента
            this.setState({
                name: '',
                salary: ''
            });
        } else {
            // Выводим сообщение об ошибке в alert
            alert('Введите не менее трех символов в каждое поле!');
        }
    }

    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        //контролируемый элемент:
                        value={name} //обязательно записывать атрибут VALUE
                        onChange={this.onValueChange} />
                    <input
                        type="number"
                        placeholder="З/П в $?"
                        className="form-control new-post-label"
                        name='salary'
                        //контролируемый элемент:
                        value={salary} //обязательно записывать атрибут VALUE
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