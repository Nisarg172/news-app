
import './App.css';
import React, { Component } from 'react'
import Navebar from './Component/Navebar';
import News from './Component/News';
import {
  BrowserRouter,
  Routes,
  Router,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  state = {
    progress: 20
  }
  setprogress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (

      <div  style={{backgroundColor: "#041C32"}}>


        <BrowserRouter>
       
          <LoadingBar
            color='linear-gradient(135deg,#FF1700,#FFE400,#06FF00)'
            progress={this.state.progress}
            height={3}
          />
           <Navebar />


          <Routes>
            <Route path="/" element={<News setprogress={this.setprogress} category="general" />} />
            <Route exact path="/business" element={<News setprogress={this.setprogress} key="business" category="business" />} />
            <Route exact path="/entertainment" element={<News setprogress={this.setprogress} key="entertainment" category="entertainment" />} />
            <Route exact path="/science" element={<News setprogress={this.setprogress} key="science" category="science" />} />
            <Route exact path="/health" element={<News setprogress={this.setprogress} key="health" category="health" />} />
            <Route exact path="/sports" element={<News setprogress={this.setprogress} key="sports" category="sports" />} />
            <Route exact path="/technology" element={<News setprogress={this.setprogress} key="technology" category="technology" />} />

          </Routes>
        </BrowserRouter>
      </div>

    );
  }
}

