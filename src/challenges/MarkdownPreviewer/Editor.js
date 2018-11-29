import React from 'react'

export default (props) => {
    return (
        <div className="Editor">
            <textarea
                value={props.text}
                onChange={props.onChange}      
                name=""
                id="editor"></textarea>
        </div>
    )
}