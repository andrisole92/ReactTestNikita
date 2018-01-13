/**
 * Blue
 */

import React from 'react';
import Grid from '../Grid/Grid';

class Blue extends React.PureComponent {
    render() {
        return (
            <div className={this.props.clicked ? 'Blue clicked' : 'Blue'}>

                <Grid onWhiteClick={this.props.onWhiteClick} clicked={this.props.clicked}></Grid>
            </div>
        );
    }
}

Blue.defaultProps = {
};

export default Blue;
