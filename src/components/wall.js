import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import React from 'react';
import BigBox from "./bigbox";

class Wall extends BigBox {

    WIDTH = '20';
    HEIGHT = '10';
    DEPTH = '0.05';


    constructor(props) {
        super(props);
        this.state.dims = {primitive: 'box', width: this.WIDTH, height: this.HEIGHT, depth: this.DEPTH};
    }

}

export default Wall;