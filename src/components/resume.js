import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { height } from 'window-size';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img 
                        src="./81-512.png"
                        alt="avatar"
                        style={{height: '200px'}}
                        />
                        </div>
                    <h2 style={{paddingTop: '2em'}}>Andi Ahmad S</h2>
                    <h4 style={{color: 'grey'}}>programer</h4>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    <p>eike nooeike nooeike nooeike nooeike nooeike nooeike nooeike noobeike noo
                    eike nooeike nooeike nooeike nooeike nooeike nooeike nooeike nooeike noo 
                    eike nooeike nooeike nooeike noo
                    eike nooeike nooeike nooeike nooeike nooeike nooeike nooeike noo
                    eike nooeike nooeike nooeike noo
                    </p>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    <h5>Address</h5>
                    <p>jalan mangunggal panam </p>
                    <h5>phone</h5>
                    <p>(123)456-789</p>
                    <h5>Email</h5>
                    <p>Andi.fivesco@gmail.com</p>
                    <h5>Github</h5>
                    <p>AAsaputra</p>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>                    
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                   
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Resume;