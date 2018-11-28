import React from 'react'

export default (props) => {
    return (
        <section className="Editor">
            <textarea
                value={props.text}
                onChange={props.onChange}      
                name=""
                id="editor"></textarea>
        </section>
    )
}