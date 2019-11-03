import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import React from 'react';
import BigBox from "./wall";
import ArticleWindow from "./articlewindow";


class WallFrame extends Wall {

    slatArray = [];


    constructor(props) {
        super(props);
        this.state.slatdims = this.props.slatdims;
        this.state.dims = {primitive: 'box', width: WIDTH, height: HEIGHT, depth: DEPTH};
    }


    render() {
        let i, j;
        for (i = 0; i < this.state.slatdims.rows; ++i) {
            let slatCols = [];
            for(j = 0; j < this.state.slatdims.cols; ++j) {
                slatCols.concat(<ArticleWindow/>);
            }

            this.slatArray.concat(slatCols);

        }
    }

}

export default WallFrame;