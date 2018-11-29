import React from 'react'

export default class Preview extends React.Component {

    setInnerHTML (html, id = 'preview') {
        document.getElementById(id).innerHTML = html        
    }
    componentDidMount () {
        this.setInnerHTML(this.props.html)
    }
    componentDidUpdate () {
        this.setInnerHTML(this.props.html)
    }
    render () {
        return (
            <div className="Preview">
                <div id="preview">
                </div>
            </div>
        )
    }
}