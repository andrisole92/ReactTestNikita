/**
 * White
 */

import React from 'react';

class White extends React.PureComponent {
    render() {
        return (
            <div className={this.props.clicked ? 'White clicked' : 'White'} onClick={this.props.onWhiteClick}>
            </div>
        );
    }
}

White.defaultProps = {
};

export default White;
