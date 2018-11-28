import React from 'react'
import Main from './Main'
import '../assets/css/resetStyles.css'
import '../assets/css/styles.css'

export default class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <Main />
            </React.StrictMode>
        )
    }
}