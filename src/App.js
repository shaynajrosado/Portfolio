import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // Uses a header that scrolls with the text, rather than staying locked at the top 
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="Shayna Rosado" scroll>
            <Navigation>
              <Link to ="{process.env.PUBLIC_URL}/">Home</Link>
              <Link to ="{process.env.PUBLIC_URL}/resume">Resume</Link>
              <Link to ="{process.env.PUBLIC_URL}/projects">Projects</Link>
              <Link to ="{process.env.PUBLIC_URL}/contact">Contact</Link>
              <Link to ="{process.env.PUBLIC_URL}/aboutme">About Me</Link>

            </Navigation>
          </Header>
          <Drawer title="Shayna Rosado">
            <Navigation>
              <Link to ="/">Home</Link>
              <Link to ="/resume">Resume</Link>
              <Link to ="/projects">Projects</Link>
              <Link to ="/contact">Contact</Link>
              <Link to ="/aboutme">About Me</Link>
            </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main />
          </Content>
      </Layout>
    </div>
    ); 
  }
}

export default App;