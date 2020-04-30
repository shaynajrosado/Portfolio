import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      // Uses a header that scrolls with the text, rather than staying locked at the top 
      <div className="demo-big-content">
      <Layout>
          <Header title="Title" scroll>
            <Navigation>
              <Link to ="/resume">Resume</Link>
              <Link to ="/contact">Contact</Link>
              <Link to ="/aboutme">About Me</Link>
              <Link to ="/projects">Projects</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to ="/resume">Resume</Link>
              <Link to ="/contact">Contact</Link>
              <Link to ="/aboutme">About Me</Link>
              <Link to ="/projects">Projects</Link>
            </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main></Main>
          </Content>
      </Layout>
    </div>
    ) 
  }
}