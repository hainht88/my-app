import React from 'react';
import List from './List';
import Form from './Form';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { tasks: [] }
    }

    handleSubmit = task => {
        this.setState({ tasks: [...this.state.tasks, task] })
    }

    handleRemove = index => {
        this.setState({ tasks: this.state.tasks.filter((task, i) => i !== index) })
    }

    render() {
        const { tasks } = this.state

        return (
            <div className="container">
                <h1>To-do list</h1>
                <List tasks={tasks} handleRemove={this.handleRemove} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App;