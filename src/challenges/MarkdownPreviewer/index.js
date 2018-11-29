import React from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import Editor from './Editor'
import Preview from './Preview'
import initialText from './initialText'
import { addFccScript } from '../../helpers'

marked.setOptions({
    breaks: true,
    highlight: function(code) {
        return hljs.highlightAuto(code)
    }
})

export default class MarkdownPreviewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: initialText,
            markdown: ''
        }
        this.onTextChange = this.onTextChange.bind(this)
        this.setMarkdownText = this.setMarkdownText.bind(this)
    }

    onTextChange (e) {
        this.setState({ text: e.target.value })
        this.setMarkdownText(e.target.value)
    }

    setMarkdownText (text) {
        this.setState({ markdown: marked(text) })
    }

    componentDidMount() {
        addFccScript()
        this.setMarkdownText(this.state.text)
    }

    render() {
        return (
            <div className="FCC__MarkdownPreviewer">
                <Editor text={ this.state.text } onChange={ this.onTextChange }/>
                <Preview html={ this.state.markdown } />
            </div>
        )
    }
}