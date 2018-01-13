/**
 * Pink
 */

import React from 'react';

class Pink extends React.PureComponent {
    render() {
        return (
            <div className={this.props.clicked ? 'Pink clicked' : 'Pink'}>
            </div>
        );
    }
}

Pink.defaultProps = {
};

export default Pink;
