import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landingpage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                <Cell col={12}>
                <img
                    src="../81-512.png"
                    alt="avatar"
                    className="avatar-img"
                    />  
                <div className="banner-text">

                <h1>Fullstack Web Developer</h1>
                
                <hr/>
                <p>HTML/CSS | Bootstrap | Javascript | React | Python | Nodejs | Express | Php | Phalcon </p>

                <div className="social-links">

                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square"  arial-hidden="true" />
                </a>

                <a href="https://github.com/AAsaputra" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square"  arial-hidden="true" />
                </a>

                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-free-code-camp"  arial-hidden="true" />
                </a>

                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-square"  arial-hidden="true" />
                </a>

                
                </div>
                </div>

                </Cell>
                </Grid>
            </div>

        )
    }
}

export default Landingpage;