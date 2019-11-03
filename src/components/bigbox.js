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
        let material = {color: 'red', opacity: 0.6};

        if(props.pos != null) {
            pos = {x: props.pos[0], y: props.pos[2], z: props.pos[1]};
        }

        if(props.rot != null) {
            rot = {x: props.rot[0], y: props.rot[2], z: props.rot[1]};
        }

        if(props.dims != null) {
            dims = {primitive: 'box', width: props.dims[0], height: props.dims[1], depth: props.dims[2]};
        }

        if(props.material != null) {
            material = props.material;
        }

        this.state = {pos: pos, rot: rot, dims: dims, material: material};
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
                    material={this.state.material}
                    position={this.state.pos}
                    rotation={this.state.rot}
                    events={{click: this.changeColor.bind(this)}}>
            </Entity>
        );
    }
}

export default BigBox;