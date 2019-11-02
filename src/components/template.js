import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

class ArticleWindow extends React.Component {
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

    changeColor() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
        this.setState({
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    render() {
        return (
            <Entity id="box"
                    geometry={{primitive: 'box'}}
                    material={{color: this.state.color, opacity: 0.6}}
                // animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
                // animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
                    position={this.state.pos}
                    rotation={this.state.rot}
                    events={{click: this.changeColor.bind(this)}}>
                <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
                        geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
                        material={{color: '#24CAFF'}}/>
            </Entity>
        );
    }
}

export default ArticleWindow;