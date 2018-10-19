import React from 'react'

export default props => (
    <button type={props.type} className={`btn btn-${props.submitClass}`} onClick={props.clickButton} >
        { props.submitLabel }
    </button>
)