/**
 * Yellow
 */

import React from 'react';

class Yellow extends React.PureComponent {
    render() {
        return (
            <div className={this.props.clicked ? 'Yellow clicked' : 'Yellow'} >
            </div>
        );
    }
}

Yellow.defaultProps = {
};

export default Yellow;
