
import './App.css';
import Navebar from './Component/Navebar';
import News from './Component/News';
import {
  BrowserRouter,
  Routes,
  Router,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (

    <div >


      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path="/" element={<News category="general" />} />
          <Route exact  path="/business" element={<News key="business" category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" />} />  
          <Route exact path="/science" element={<News  key="science" category="science" />} />
          <Route exact path="/health" element={<News  key="health"  category="health" />} />
          <Route exact path="/sports" element={<News  key="health" category="sports" />} />
          <Route exact path="/technology" element={<News key="health"  category="technology" />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
