/**
 * Grid
 */

import React from 'react';
import Column from './Column/Column';
import PinkAndYellow from '../PinkAndYellow/PinkAndYellow';
import White from '../White/White';

class Grid extends React.PureComponent {


    render() {

        let nColumns = 12;

        let columns = [];

        for (let i = 0; i < nColumns; i++) {

            columns.push(<Column></Column>)

        }

        return (
            <div className="grid">
                <PinkAndYellow clicked={this.props.clicked}></PinkAndYellow>
                <White clicked={this.props.clicked} onWhiteClick={this.props.onWhiteClick}></White>

                {columns}
            </div>
        );
    }
}

Grid.defaultProps = {
};

export default Grid;
