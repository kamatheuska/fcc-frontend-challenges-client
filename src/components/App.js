import React from 'react'
import MarkdownPreviewer from '../challenges/MarkdownPreviewer'
import DrumMachine from '../challenges/DrumMachine'
import Navbar from '../components/Navbar'
import '../assets/css/resetStyles.css'
import '../assets/css/styles.css'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            challenges: [
                {
                    id: 1,
                    name: 'Markdown Previewer',
                    component: MarkdownPreviewer,
                    active: false
                },
                {
                    id: 2,
                    name: 'Drum Machine',
                    component: DrumMachine,
                    active: false
                }
            ]
        }
        this.handleNavbarClick = this.handleNavbarClick.bind(this)
        this.getActiveChallengeIndex = this.getActiveChallengeIndex.bind(this)
    }

    handleNavbarClick (e) {
        let clickedId = e.target.getAttribute('id')
        this.disableChallenges()
        this.setActiveChallenge(clickedId)
    }

    getActiveChallengeIndex () {
        return this.state.challenges
            .map((el, index) => el.active ? index : -1)
            .find(el => el !== -1)
    }
    
    setActiveChallenge (id) {
        let index = this.getActiveChallengeIndex()
        console.log(`Printing- - - - index:`, index)
    }

    disableChallenges () {
        this.state.challenges.forEach((challenge, index) => {
            this.setState({
                challenges: {
                    active: false
                }
            })
        })
    }

    render() {
        let activeChallenge = this.state.challenges
            .find(el => el.active)
        let ActiveChallenge = activeChallenge
            ? activeChallenge.component
            : undefined
        console.log(`Printing- - - - ActiveChallenge:`, ActiveChallenge)
        return (
            <React.StrictMode>
                <Navbar
                    onClick={ this.handleNavbarClick }
                    routes={ this.state.challenges }
                />
                <div className="container__challenge">
                    {
                        activeChallenge
                            ? <ActiveChallenge />
                            : <h2>Please select a challenge</h2>
                    }
                </div>
            </React.StrictMode>
        )
    }
}