import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import BigBox from './bigbox';
import React from 'react';

class ArticleWindow extends BigBox {
    constructor(props) {
        super(props);
        this.state.dims = {primitive: 'box', width: '1', height: '0.75', depth: '0.05'};
    }

    changeColor() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
        this.setState({
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    render() {
        return super.render();
    }
}

export default ArticleWindow;