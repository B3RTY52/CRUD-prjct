import './app-info.css';

const AppInfo = (props) => {
    const { counter } = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2 onClick={() => console.log(props)}>Общее число сотрудников: </h2>
            <h2>Премию получат: {counter}</h2>
        </div>
    )
}

export default AppInfo;