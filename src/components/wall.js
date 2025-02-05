import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import React from 'react';
import BigBox from "./bigbox";


let WIDTH = '20';
let HEIGHT = '10';
let DEPTH = '0.05';

class Wall extends BigBox {


    constructor(props) {
        super(props);
        this.state.dims = {primitive: 'box', width: WIDTH, height: HEIGHT, depth: DEPTH};
    }

}

export default Wall;
export {WIDTH, HEIGHT, DEPTH, Wall};