import React from 'react'
import { render } from 'react-dom'

import logo from './logo.svg'
import welcome from './images/Welcome.svg'
import agenda from './images/Agenda.svg'
import gittwo from './images/Basics2.svg'
import gitone from './images/3.svg'
import githubwebsite from './images/5.svg'
import repo from './images/Basics1.svg'
import githubflow from './images/GithubFlow.svg'
import issues from './images/Creating a Branch.svg'
import closingissues from './images/Creating a Branch (2).svg'

import creatingbranch from './images/Creating a Branch (3).svg'



import cloningintro from './images/13.svg'

import plugins from './images/Plugins.svg'

import goodbye from './images/Github Profile 2 (5).svg'
import profiletwo from './images/Github Profile 2 (4).svg'
import profilethree from './images/Github Profile 2 (3).svg'
import profilefour from './images/Github Profile 2 (2).svg'
import profilefive from './images/Github Profile 2.svg'


import forking from './images/Forking.svg'
import forkingtwo from './images/Forking (2).svg'
import forkingthree from './images/Forking (3).svg'


import item2 from './images/10.svg'
import pullrequest from './images/Pull Request.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  Github Workshop
      </header>

      <div> 
          <div>
            <img src={welcome} className="App-logo" alt="welcome" />
          </div>
        <div>
          <img src={agenda} className="App-logo" alt="agenda" />
        </div>
        <div>
          <img src={gitone} className="App-logo" alt="gitone" />
        </div>
        <div>
          <img src={gittwo} className="App-logo" alt="gittwo" />
        </div>
        <div>
          <img src={githubwebsite} className="App-logo" alt="githubwebsite" />
        </div>
      
        <div className="Img"><img src={repo} className="App-logo" alt="repo" /></div>
        <div className="Img"><img src={githubflow} className="App-logo" alt="github-flow" /></div>
        <div><img src={issues} className="App-logo" alt="issues" /></div>
        <div><img src={closingissues} className="App-logo" alt="closingissues" /></div>
        <div><img src={pullrequest} className="App-logo" alt="issues" /></div>
      
        <div><img src={item2} className="App-logo" alt="issues" /></div>

        <div><img src={forking} className="App-logo" alt="profileone" /></div> 
        <div><img src={cloningintro} className="App-logo" alt="issues" />
        </div>
        <div><img src={forkingthree} className="App-logo" alt="profileone" /></div>
        <div><img src={forkingtwo} className="App-logo" alt="profileone" /></div>
        
      <div>
  
      </div>
       <div><img src={creatingbranch} className="App-logo" alt="creatingbranch" /></div> 
        
        <div><img src={plugins} className="App-logo" alt="profile" /></div>
        <div><img src={profilefive} className="App-logo" alt="profile" /></div>
       <div><img src={profilefour} className="App-logo" alt="profile" /></div>

        <div><img src={profilethree} className="App-logo" alt="profile" /></div>
        <div><img src={profiletwo} className="App-logo" alt="profiletwo" /></div> 
 
        <div><img src={goodbye} className="App-logo" alt="goodbye" /></div>
   
      </div>
    </div>
  );
}


export default App;
