/**
 * Main
 */

import React from 'react';
import Blue from '../Blue/Blue';

class Main extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {clicked: false};
    }
    render() {
        return (
            <div className={this.state.clicked ? 'Main clicked' : 'Main'}>
                <Blue onWhiteClick={()=>this.setState({clicked:true})} clicked = {this.state.clicked}></Blue>
            </div>
        );
    }
}

Main.defaultProps = {
};

export default Main;
