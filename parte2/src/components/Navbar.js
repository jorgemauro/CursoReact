import React, { Component } from 'react';


class Navbar extends Component {
    render() {
        return (
            <div className="menu-fixed">
                <div className="menu-fixed-container" style={{top:'0px',position:"relative"}}>
                    <div className="menu-fixed-main">
                        <a className="logo icon-logoUpdate active"></a>
                        <ul className="menu-fixed-links" role="navigation">
                            {this.props.menu.map((item)=><li key={item} className="menu-fixed-links-item">
                                <a className="menu-link" role="button" aria-haspopup="true">{item}</a>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
    );
    }
}

export default Navbar;