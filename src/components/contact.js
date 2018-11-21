import React, { Component } from 'react';
import {Grid, Cell, ListItem, ListItemContent, List} from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
            <Cell col={6}>
            <h2>AHA SOFTWAREHOUSE</h2>
            <img
                src="../me.jpg"
                alt="avatar"
                style={{height:'250px'}}
            />
            <p style={{width:'75%', margin:'auto', paddingTop: '1em' }} >ahasoftwarehouse adalah sebuah rumah software yang bergerak dibidang pembuatan aplikasi web android dll,ide untuk membuat sebua startup ini muncul ketika banyak nya mahasiswa Informatika yang tidak pandai ngoding wkwk, Sejauh ini ahasoftwarehouse sangat2 kacau dalam manajemen bisnis nya, dan diharapkan suatu saat nanti aha akan menjadi suatu inovasi untuk masa depan wkwkw</p>
            
            </Cell>
            <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">



            
            <List>
            <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                <i className="fa fa-phone-square" aria-hidden="true"/>
                (123) 456-788
                </ListItemContent>
            </ListItem>

            <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                <i className="fa fa-git-square" aria-hidden="true"/>
                AAsaputra
                </ListItemContent>
            </ListItem>

            <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                <i className="fa fa-envelope" aria-hidden="true"/>
                ahasoft@gmail.com
                </ListItemContent>
            </ListItem>
            <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                <i className="fa fa-instagram" aria-hidden="true"/>
            @ahasoftwarehouse
                </ListItemContent>
            </ListItem>
            </List>
            </div>
                        
            
            </Cell>
            
            </Grid>
            
            
            </div>
        )
    }
}

export default Contact;