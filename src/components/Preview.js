import React from 'react'

export default (props) => {
    return (
        <section>
            <div id="preview">
                <p style={{ fontSize: "2rem" }}>{ props.text }</p>
            </div>
        </section>
    )
}