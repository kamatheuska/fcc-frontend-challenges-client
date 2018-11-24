import React from 'react'
import Main from './Main'
import '../assets/css/resetStyles.css'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textarea: 'this is a test'
        }
    }

    render() {
        return (
            <div>
                <Main />
            </div>
        )
    }
}