import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

class BigBox extends React.Component {
    constructor(props) {
        super(props);
        let pos = {x: 0, y: 0, z: 0};
        let rot = {x: 0, y: 0, z: 0};
        let dims = {primitive: 'box', width: 1, height: 1, depth: 1};

        if(props.pos != null) {
            pos = {x: props.pos[0], y: props.pos[2], z: props.pos[1]};
        }

        if(props.rot != null) {
            rot = {x: props.rot[0], y: props.rot[2], z: props.rot[1]};
        }

        if(props.dims != null) {
            dims = {primitive: 'box', width: props.dims[0], height: props.dims[1], depth: props.dims[2]};
        }

        this.state = {pos: pos, rot: rot, dims: dims};
    }

    changeColor() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
        this.setState({
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    render() {
        return (
            <Entity id="box"
                    geometry={this.state.dims}
                    material={{color: this.state.color, opacity: 0.6}}
                    position={this.state.pos}
                    rotation={this.state.rot}
                    events={{click: this.changeColor.bind(this)}}>
            </Entity>
        );
    }
}

export default BigBox;