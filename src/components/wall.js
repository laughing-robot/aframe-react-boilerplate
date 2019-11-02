import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import React from 'react';
import {Entity} from "aframe-react";

class Wall extends React.Component {

    constructor(props) {
        super(props);
        this.state.dims = {primitive: 'box', width: '20', height: '10', depth: '0.05'};
    }


    render () {
        (
         <Entity>
           position={this.state.pos}
           rotation={this.state.rot}
         </Entity>
        );

    }

}