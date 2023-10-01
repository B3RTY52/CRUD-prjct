import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        // мы назначаем переменную, которая будет принимать значение из инпута
        const term = e.target.value;
        // передаем её в стейт, меняя его значение:
        this.setState({ term });
        // теперь прокидываем все наверх через пропсы:
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch} />
        )
    }
}



export default SearchPanel;