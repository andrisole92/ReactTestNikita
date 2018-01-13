/**
 * PinkAndYellow
 */

import React from 'react';
import Pink from './Pink/Pink';
import Yellow from './Yellow/Yellow';

class PinkAndYellow extends React.PureComponent {
    render() {
        return (
            <div className="PinkAndYellow">
                <Pink clicked={this.props.clicked}></Pink>
                <Yellow clicked={this.props.clicked}></Yellow>
            </div>
        );
    }
}

PinkAndYellow.defaultProps = {
};

export default PinkAndYellow;
