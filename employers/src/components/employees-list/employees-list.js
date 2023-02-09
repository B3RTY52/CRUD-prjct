import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data }) => {

    // const elements = data.map(item => {
    //     const { id, ...itemProps } = item;
    //     return (
    //         <EmployeesListItem key={id} {...itemProps} />
    //     )
    // })

    // если у элемента не прописан id, то работаем через индекс:
    const elements = data.map((item, i) => {
        const { id, ...itemProps } = item;
        return (
            <EmployeesListItem key={i} {...itemProps} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;