import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component{
    constructor(props) {
        super(props)
        this.state = {activeTab:0 }; 
    }
    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{width: '900px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '400px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}}>React CLI</CardTitle>
                <CardText>
                React.js merupakan pustaka interaksi pengguna JavaScript untuk membuat komponen interaksi pengguna yang interaktif dan dapat digunakan ulang. Hal ini merupakan bagian V dari MVC. React.js memungkinkan Anda untuk membuat komponen sendiri (tidak berupa template seperti pada AngularJS atau KnockoutJS). 
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>Get Started</Button>
                    <Button colored>Instagram</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            
            </div>
            
            
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div>
                       <Card shadow={5} style={{width: '900px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '400px', background: 'url(../a.png) center / cover'}}>ANGULAR CLI</CardTitle>
                <CardText>
                AngularJS adalah salah satu front end framework untuk javascript yang di kembangkan oleh google dan ini adalah framework open source alias gratis. AngularJS ini memiliki banyak fitur yang powerful dimana dengan fitur – fitur ini menjadikan proses development menjadi lebih singkat. Bukan hanya proses development yang menjadi lebih singkat, karena menggunakan framework akan berimbas ke pengorganisasian kode javascript yang lebih baik. AngularJS merupakan sebuah framework struktural untuk aplikasi web dinamis dari sisi Client dengan konsep Model View Whatever (MVW). Konsep ini bertujuan untuk memisahkan logika presentasi dari logika bisnis, dimana javascript berperan sebagai pengelola model dan logika dan HTML sebagai view atau yang mempresentasikan.
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>Get Started</Button>
                    <Button colored>Instagram</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
                </div>
            )


        } else if(this.state.activeTab === 2){
            return(
                <div>
                    <Card shadow={5} style={{width: '900px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '400px', background: 'url(../Vue1-blog.jpg) center / cover'}}>VUE CLI</CardTitle>
                <CardText>
                Vue.js ini pertama kali di temukan oleh Evan You. Di dua perusahaan terakhir sebelumnya dia pernah bekerja di Google sebagai Creative Technology (2012–2014) dan Meteor Development Group (2014–2016) sebagai Core Dev. Dan di pertengahan tahun 2016 dia akhirnya memutuskan untuk fokus membangun Vue.js hingga saat ini.

https://www.linkedin.com/in/evanyou

Untuk pertama kalinya Vue.js ini release pada Februari 2014 dan di minggu pertama release mendapatkan perhatian yang baik di dunia maya khusus nya para developer dan media.
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>Get Started</Button>
                    <Button colored>Instagram</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

                </div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div>
                    <Card shadow={5} style={{width: '900px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '400px', background: 'url(../emmber.png) center / cover'}}>emmber CLI</CardTitle>
                <CardText>
                Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel (MVVM) pattern. It allows developers to create scalable single-page web applications[3] by incorporating common idioms and best practices into the framework.

Ember is used on many popular websites, including Discourse,[4] Groupon,[5] LinkedIn, Vine, Live Nation, Nordstrom, Twitch.tv and Chipotle.[6] Although primarily considered a framework for the web, it is also possible to build desktop and mobile applications in Ember.[7][8][9] The most notable example of an Ember desktop application is Apple Music,[10] a feature of the iTunes desktop application. 
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>Get Started</Button>
                    <Button colored>Instagram</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>



                </div>
            )
        }
    }
    



    render(){
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
            <Tab>react</Tab>
            <Tab>Angular</Tab>
            <Tab>VueJs</Tab>
            <Tab>EmbberJS</Tab>

            </Tabs>

            <section className="projects-grid">
            <Grid className="projects-grid">

            <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
            </Cell>
            
            </Grid>



            
            
            
            </section>
            
            </div>
        )
    }
}



export default Projects;