import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import React from 'react';
import {Entity} from "aframe-react";

class Wall extends React.Component {

    constructor(props) {
        super(props);
        let pos = {x: 0, y: 0, z: 0};
        let rot = {x: 0, y: 0, z: 0};

        if(props.pos != null) {
            pos = {x: props.pos[0], y: props.pos[2], z: props.pos[1]};
        }

        if(props.rot != null) {
            rot = {x: props.rot[0], y: props.rot[2], z: props.rot[1]};
        }

        this.state = {pos: pos, rot: rot};
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