import { Component } from 'react';

import './app-filter.css'

class AppFilter extends Component {
    constructor(props) {
        super(props)
    }

    filterEmp = (e) => {
        this.props.filterEmp(e.currentTarget.getAttribute('data-filter'))
        console.log(e.currentTarget.getAttribute('data-filter'));
    }

    render() {
        return (
            <div className="btn-group">
                <button className="btn btn-light"
                    type="button"
                    data-filter="all"
                    onClick={this.filterEmp}>
                    Все сотрудники
                </button>
                <button className="btn btn-outline-light"
                    type="button"
                    data-filter="rise"
                    onClick={this.filterEmp}>
                    На повышение
                </button>
                <button className="btn btn-outline-light"
                    type="button"
                    data-filter="salary"
                    onClick={this.filterEmp}>
                    З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;