import React from 'react'

export default (props) => {
    let routeNameList = props.routes.map(route => {
        return (
            <li
                onClick={ props.onClick }
                key={ `route${route.id}` }
                className="test"
                id={ route.id }
            >
                { route.name }
            </li>
        )
    })

    return (
        <nav className="Navbar">
            <ul className="Navbar__ul">
                { routeNameList }
            </ul>
        </nav>
    )
}