import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import pic from '../avatar.png';
class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                          src={pic}
                          alt="avatar"
                          className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Software Developer</h1>

                            <hr />

                            <p>HTML/CSS | JavaScript | React | React Native | Node.js | Firebase</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="http://www.linkedin.com/in/shayna-rosado" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="http://www.github.com/shaynajrosado" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;