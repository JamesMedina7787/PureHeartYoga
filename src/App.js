import React, { Component } from 'react';
import './App.css';
import Yoga from "./components/Yoga"
import Navigation from    "./components/Navigation"

import FoldOverItem from  "./components/FoldOverItem"
import FoldOverItem2 from "./components/FoldOverItem2"
import FoldOverItem3 from "./components/FoldOverItem3"
import FoldOverItem4 from "./components/FoldOverItem4"
import CSSTransitionGroup from "react-transition-group"


import Project from "./components/Project"


import {NavLink} from 'react-router-dom'
import {BrowserRouter, Route, Switch, browserHistory} from "react-router-dom";

import anahata from './pictures/anahata.jpg'
import anja from './pictures/anja.jpg'
import chakraSnakeImage from './pictures/chakra-snake-image.jpg'
import lotusYogini from './pictures/lotus-Yogini.jpg'
import lotus from './pictures/lotus.jpg'
import lotus2 from './pictures/lotus2.png'
import lotus3 from './pictures/lotus3.png'
import ohm from './pictures/ohm.png'
import prana from './pictures/prana.jpg'
import bow from './pictures/giaGianina.jpg'
import SacralChakraSymbol1 from './pictures/Sacral-Chakra-Symbol-1.jpg'
import vishudda from './pictures/vishudda.jpg'
import fb from "./pictures/fb.jpg"
import scope from "./pictures/scope.png"



const superAgent = require('superagent')
const url = 'http://omdbapi.com/?=star&y=&r=json'

var grr = document.getElementsByClassName("App")

class App extends Component {
  constructor(){
    super()
  }



   fetchFeed= function(){
    superAgent.get(url)
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response) =>{
      if(err){
        console.log(err.message)
        return
      }
      console.log(JSON.stringify(response.body))
    })
  }



  fetchFeed= function(){
    superAgent.get(url)
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response) =>{
      if(err){
        console.log(err.message)
        return
      }
      console.log(JSON.stringify(response.body))
    })
  }
  render() {
    return (




      <div className="App">




      <BrowserRouter >
       <Navigation  />
       <Switch >


         <div className="blogContainer">



           <Route className='' path="/" >
           </Route>



           <Route className='' path="/FoldOverItem" component={FoldOverItem}  >
           </Route>

           <Route className='foldOver' path="/FoldOverItem2" component={FoldOverItem2} >
           </Route>

           <Route  className='foldOver' path="/FoldOverItem3" component={FoldOverItem3}>
           </Route>

           <Route  className='foldOver' path="/FoldOverItem4" component={FoldOverItem4}>
           </Route>


      </div>
         <Route component={Error}></Route>
                 </Switch>
      </BrowserRouter>



<div className="url">
      <Project className="Spins" webSiteName="Pure Hearts Yoga" image={scope} url="/FoldOverItem"/>
      <Project className="Spins" webSiteName="Links" image={lotus2} url="/FoldOverItem2"/>
      <Project className="Spins" webSiteName="Schedule" image={ohm} url="/FoldOverItem3"/>
      <Project className="Spins" webSiteName="Blog" image={chakraSnakeImage} url="/FoldOverItem4"/>
</div>
<div className="bowPic">
</div>
      </div>


    );
  }
}

export default App;
