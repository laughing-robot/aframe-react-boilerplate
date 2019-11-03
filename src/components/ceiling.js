import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import React from 'react';
import BigBox from "./bigbox";
import {WIDTH} from "./wall";


let CWIDTH = (parseFloat(WIDTH)).toString();
let DEPTH = '0.05';

class Ceiling extends BigBox {

    constructor(props) {
        super(props);
        this.state.dims = {primitive: 'box', width: CWIDTH, height: CWIDTH, depth: DEPTH};
    }

}

export {CWIDTH, Ceiling};