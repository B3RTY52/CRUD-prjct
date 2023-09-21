import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {

    const elements = data.map(item => {
        // что мы здесь делаем?
        // это деструктуризация, при которой, мы отделаем пропс ID от всех
        // остальных пропсов, оставляя их в item, а его вынося.
        const { id, ...itemProps } = item;
        return (
            <EmployeesListItem key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)} />
        )
    })

    // если у элемента не прописан id, то работаем через индекс:
    // но такой способ подходит ТОЛЬКО, если ПОРЯДОК элементов не меняется
    // const elements = data.map((item, i) => {
    //     const { id, ...itemProps } = item;
    //     return (
    //         <EmployeesListItem
    //             key={i}
    //             {...itemProps}
    //             onDelete={() => onDelete(id)} />
    //     )
    // })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;
