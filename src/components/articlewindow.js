import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import BigBox from './bigbox';
import React from 'react';

class ArticleWindow extends BigBox {

    WIDTH = '1';
    HEIGHT = '0.75';
    DEPTH = '0.05';

    constructor(props) {
        super(props);
        this.state.dims = {primitive: 'box', width: this.WIDTH, height: this.HEIGHT, depth: this.DEPTH};
    }

    changeColor() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
        this.setState({
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
}

export default ArticleWindow;