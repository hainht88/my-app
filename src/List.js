import React from 'react';

const HandleItem = props => {
    const { task, index, handleRemove } = props

    return <li onClick={() => handleRemove(index)}>{task}</li>
}

const ItemList = props => {
    const list = props.tasks.map((task, index) => <HandleItem key={index} index={index} task={task} handleRemove={props.handleRemove} />)

    return (
        <ul>
            {list}
        </ul>
    )
}

class List extends React.Component {
    render() {
        const { tasks, handleRemove } = this.props

        return (
            <ItemList tasks={tasks} handleRemove={handleRemove} />
        )
    }
}

export default List;