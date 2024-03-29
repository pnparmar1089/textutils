
import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
            <div className="container-fluid" >
                <a className="navbar-brand" href="https://pnparmar1089.blogspot.com/">Back</a>
                <a className="navbar-brand" href="">{props.title}</a>
                
                            
                        
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
                    </div>
                </div>
            
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };