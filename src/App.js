
import './App.css';
import React, { useState } from 'react'
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

const App=()=>{

  const api = process.env.REACT_APP_API_KEY;
  
  const [progress ,setprogress] = useState(0)
 

 
    return (

      <div style={{ backgroundColor: "#041C32" }}>


        <BrowserRouter>

          <LoadingBar
            color='linear-gradient(135deg,#FF1700,#FFE400,#06FF00)'
            progress={progress}
            height={3}
          />
          <Navebar />


          <Routes>
            <Route path="/" key="general" element={<News api={api} setprogress={setprogress} category="general" />} />
            <Route exact path="/business" element={<News api={api} setprogress={setprogress} key="business" category="business" />} />
            <Route exact path="/entertainment" element={<News api={api} setprogress={setprogress} key="entertainment" category="entertainment" />} />
            <Route exact path="/science" element={<News api={api} setprogress={setprogress} key="science" category="science" />} />
            <Route exact path="/health" element={<News api={api} setprogress={setprogress} key="health" category="health" />} />
            <Route exact path="/sports" element={<News api={api} setprogress={setprogress} key="sports" category="sports" />} />
            <Route exact path="/technology" element={<News api={api} setprogress={setprogress} key="technology" category="technology" />}
            />
           

          </Routes>
        </BrowserRouter>
      </div>

    );
  
}

export default App;

