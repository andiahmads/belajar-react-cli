import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Aboutme from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';




const Main = () => (
    <switch>
        
        <Route exact path="/"component={LandingPage} />
        <Route path="/home"component={LandingPage} />
        <Route path="/aboutme"component={Aboutme} />
        <Route path="/contact"component={Contact} />
        <Route path="/projects"component={Projects} />
        <Route path="/resume"component={Resume} />
        
        
        
    </switch>
)


export default Main;