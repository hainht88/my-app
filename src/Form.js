import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.initState = { task: '' }

        this.state = this.initState
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    submitForm = event => {
        event.preventDefault()

        this.props.handleSubmit(this.state.task)
        this.setState(this.initState)
    }

    render() {
        const { task } = this.state
        return (
            <form className="todo-form">
                <input type="text" name="task" value={task} onChange={this.handleChange} />
                <button onClick={this.submitForm} >Add</button>
            </form>
        )
    }
}

export default Form;