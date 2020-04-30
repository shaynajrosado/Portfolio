import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {
        {/* Mobile Projects */}
        if(this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Blue HomeLab App */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign.com/article/2019/12/03/how-to-get-water-reduction-formulation-right/10431162-1-eng-GB/How-to-get-water-reduction-formulation-right_wrbm_large.jpg) center / cover'}}>Blue HomeLab (Android)</CardTitle>
                    <CardText>
                    A consumer app that monitors water quality. When contamination is detected, the app triggers a notification.
                    </CardText>

                    <CardActions border>
                        <Button className="project-link" href="https://github.com/shaynajrosado/BlueHomeLab/" colored>GitHub</Button>
                        <Button className="project-link" href="https://drive.google.com/file/d/15xyPIFZgfEglivu8BzCAnBOZbKK_fTBQ/view?usp=sharing" colored>Software Guide</Button>
                    </CardActions>
                    
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <br />

                {/* Pinhole App */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2019/08/landscape-pinhole.jpg?fit=1500%2C1000&ssl=1) center / cover'}}>Pinhole (Android)</CardTitle>
                    <CardText>
                    Pinhole is a platform where anyone can go to find out job data in the United States. A user can see salaries, qualifications, trainings, and other relevant information to find out whether pursuing a certain career path would be right for them.
                    </CardText>

                    <CardActions border>
                        <Button className="project-link" href="https://github.com/shaynajrosado/PinholeApp/" colored>GitHub</Button>
                        <Button className="project-link" href="https://github.com/kenziedolish/wonderwomen/wiki" colored>Project Wiki</Button>
                    </CardActions>
                    
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
 
                </div>
            )
        } else if(this.state.activeTab === 1) {     {/* Web Projects */}
            return (
                <div className="projects-grid">
                {/* Professional Portfolio Web Site */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://cdn.iconscout.com/icon/free/png-256/laptop-computer-graph-chart-company-statics-performance-1-12459.png) center no-repeat'}}>Professional Portfolio</CardTitle>
                    <CardText>
                    Looks a lot like this one!
                    </CardText>

                    <CardActions border>
                        <Button className="project-link" href="https://github.com/shaynajrosado/Portfolio" colored>GitHub</Button>
                    </CardActions>
                    
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>                   
                <br />
                {/* Mackenzie & Me Website */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://cdn.dribbble.com/users/1572962/screenshots/3746471/dribbble_logo_mom_and_baby.jpg)'}}>Mackenzie and Me</CardTitle>
                    <CardText>
                    A basic website about being a mom. Made for Intro to Web Development course.
                    </CardText>

                    <CardActions border>
                        <Button className="project-link" href="http://ftp.sunyrockland.edu/~srosado/final/index.html" colored>Enter Here</Button>
                    </CardActions>
                    
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>                   
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Mobile</Tab>
                    <Tab>Web</Tab>
                </Tabs>

                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>                            
                        </Cell>
                    </Grid>

            </div>
        );
    }
}

export default Projects;