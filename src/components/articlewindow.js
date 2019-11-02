import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

class ArticleWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: 'red', x: props.x};
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
                    animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
                    animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
                    position={{x: this.props.x, y: 1, z: -3}}
                    events={{click: this.changeColor.bind(this)}}>
                <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
                        geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
                        material={{color: '#24CAFF'}}/>
            </Entity>
        );
    }
}

export default ArticleWindow;