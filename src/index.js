import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
// import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import {HEIGHT, Wall, WIDTH} from "./components/wall";
import {Ceiling} from "./components/ceiling";
import WallFrame from "./components/wallframe";
import { r } from './reddit';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

   isSuitableSubmission(submission) {
        return !submission.over_18 && submission.thumbnail_height !== null && submission.thumbnail_width !== null
            && submission.thumbnail.indexOf('://') >= 0;
    }

    appendSubmissionToAssets(submission) {
        const assets = document.getElementsByTagName('a-assets')[0];
        const child = document.createElement("img");
        child.setAttribute("id", `#${submission.id}`)
        child.setAttribute("srcset", `${submission.thumbnail} ${submission.thumbnail_width}w, ${submission.url}`)
        assets.appendChild(child);
        return submission;
    }

    refreshAssets() {
        let assets = [];

        r.then(r => r.getHot()).then(submissions =>
            submissions.filter(this.isSuitableSubmission).forEach(this.appendSubmissionToAssets).forEach(submission => {
                assets.push('#'+submission.id)
            })
        ).catch(err => {
        });

        this.setState({
            assets: assets
        })

    }

  render () {

      this.refreshAssets();

    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        {/*<Entity particle-system={{preset: 'snow', particleCount: 2000}}/>*/}
        <Entity text={{value: 'Hello, A-Frame React!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>



          <WallFrame src={this.state.assets} pos={[0, -1*parseFloat(WIDTH)/2, parseFloat(HEIGHT)/2]} material={{color:'white', opacity: '0.2'}}
          framedims={[5,7,0.05]} framenums={{rows: '1', cols:'3'}}/>

          <Wall pos={[0, parseFloat(WIDTH)/2, parseFloat(HEIGHT)/2]} material={{color:'white', opacity: '0.2'}}/>
          <Wall pos={[parseFloat(WIDTH)/2, 0, parseFloat(HEIGHT)/2]} rot={[0, 0, 90]} material={{color:'white', opacity: '0.2'}}/>
          <Wall pos={[-1*parseFloat(WIDTH)/2, 0, parseFloat(HEIGHT)/2]} rot={[0, 0, 90]} material={{color:'white', opacity: '0.2'}}/>
          <Ceiling pos={[0,0,HEIGHT]} rot={[90, 0, 0]}/>
          <Ceiling pos={[0,0,0]} rot={[90, 0, 0]}/>



        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));