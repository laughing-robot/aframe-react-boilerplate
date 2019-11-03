import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import React from 'react';
import ArticleWindow from "./articlewindow";
import {WIDTH, DEPTH, HEIGHT, Wall} from "./wall";


class WallFrame extends Wall {

    slatArray = [];


    constructor(props) {
        super(props);

        console.log(this.state.pos[0]);

        this.state = {...this.state,
            framenums: props.framenums,
            framedims: props.framedims,
            dims: {primitive: 'box', width: WIDTH, height: HEIGHT, depth: DEPTH}
        }
    }


    render() {
        let rows = parseFloat(this.state.framenums.rows);
        let cols = parseFloat(this.state.framenums.cols);
        let width = parseFloat(this.state.dims.width);
        let height = parseFloat(this.state.dims.height);
        let fwidth = this.state.framedims[0];//parseFloat(this.state.framedims.width);
        let fheight = this.state.framedims[1];//parseFloat(this.state.framedims.height);


        let i, j;

        let buftop = (height - (rows * fheight)) / rows /2;
        let bufside = (width - (cols * fwidth)) / cols /2;

        let realwidth = fwidth + 2*bufside;
        let realheight = fheight + 2*buftop;

        for (i = 0; i < rows; ++i) {
            let slatCol = [];
            for(j = 0; j < cols; ++j) {
                slatCol.push(<ArticleWindow pos={[parseFloat(this.state.pos.x) + width/2 - fwidth/2 - realwidth*j - bufside, this.state.pos.z
                    , realheight*i+buftop + fheight/2]} dims={this.state.framedims} src={this.props.src[i+j]}
                                            material={{color:'white', opacity:'0.6'}} />);
            }

            this.slatArray.push(slatCol);
        }

        console.log("hello " + this.state.pos[0] + " " + fwidth + " " + fheight);
        console.log("hello " + realheight + " " + realwidth + " " + width + " " + height + " " + rows + " " + cols);
        console.log("hello " + bufside + " " + buftop);

        return (<a-entity>
            {this.slatArray.map(row => {return row.map(slat => {return slat});})}
        </a-entity>);
    }

}

export default WallFrame;