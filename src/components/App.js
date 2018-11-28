import React from 'react'
import MarkdownPreviewer from '../challenges/MarkdownPreviewer'
import '../assets/css/resetStyles.css'
import '../assets/css/styles.css'

export default class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <div className="container__challenge">
                    <MarkdownPreviewer show={false}/>                
                </div>
            </React.StrictMode>
        )
    }
}