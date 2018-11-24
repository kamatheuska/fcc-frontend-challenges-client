import React from 'react'

export default (props) => {
    return (
        <section>
            <textarea
                value={props.text}
                onChange={props.onChange}      
                name=""
                id="editor"
                cols="30"
                rows="10"></textarea>
        </section>
    )
}