import React from 'react'
import loader from '../img/spinner.gif'

function Loader(props) {
    return (
        <img
            src={loader}
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt=""
        />
    )
}

export default Loader
