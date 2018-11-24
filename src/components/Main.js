import React from 'react'
import Editor from './Editor'
import Preview from './Preview'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'this is a test'
        }
        this.onTextChange = this.onTextChange.bind(this)
    }
    onTextChange (e) {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Editor text={ this.state.text } onChange={ this.onTextChange }/>
                <Preview text={ this.state.text } />
            </div>
        )
    }
}