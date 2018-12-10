import React from 'react'
import MarkdownPreviewer from '../challenges/MarkdownPreviewer'
import DrumMachine from '../challenges/DrumMachine'
import Navbar from '../components/Navbar'
import '../assets/css/resetStyles.css'
import '../assets/css/styles.css'
import { addFccScript } from '../helpers'



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            challenges: [
                {
                    id: '1',
                    name: 'Markdown Previewer',
                    component: MarkdownPreviewer,
                    active: false
                },
                {
                    id: '2',
                    name: 'Drum Machine',
                    component: DrumMachine,
                    active: false
                }
            ]
        }
        this.handleNavbarClick = this.handleNavbarClick.bind(this)
        this.toggleChallenge = this.toggleChallenge.bind(this)
    }

    componentDidMount() {
        addFccScript()
	}

	handleNavbarClick (e) {
        let id = e.target.getAttribute('id')
		this.toggleChallenge(id)
    }

	toggleChallenge (id) {
		this.setState(prevState => ({
			challenges: prevState.challenges.map(obj => obj.id === id
				? Object.assign(obj, { active: true })
				: Object.assign(obj, { active: false }))
		}))
    }

	activeChallenge () {
		return this.state.challenges.find(challenge => challenge.active)
	}

    render() {
        let ActiveChallenge = this.activeChallenge()
            ? this.activeChallenge().component
			: () => <h2>Please select a challenge</h2>
        return (
            <React.StrictMode>
                <Navbar
                    onClick={ this.handleNavbarClick }
                    routes={ this.state.challenges }
                />
				<div className="container__challenge">
					<ActiveChallenge />
                </div>
            </React.StrictMode>
        )
    }
}
