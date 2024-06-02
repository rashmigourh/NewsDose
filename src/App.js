import React, {useState} from 'react'
import Navbar from './component/navbar/Navbar';
import News from './component/news/News';
import LoadingBar from 'react-top-loading-bar'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './component/about_us/About';

const App =()=> {

const [progress, setProgress]=useState(0);

    return (
      <Router>
      <div>
        <Navbar />

        {/* loading bar */}
        <LoadingBar
        color='#071952'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
      />

        <Routes>
        <Route path="/" element={<News setProgress={setProgress}   key={"general"} pageSize={6} country={"in"} category={"general"} />}/>
        <Route exact path="/general" element={<News setProgress={setProgress}   key={"general"} pageSize={6} country={"in"} category={"general"} />}/>
        <Route exact path="/business" element={<News setProgress={setProgress}   key={"business"} pageSize={6} country={"in"} category={"business"} />}/>
        <Route exact path="/entertainment" element={<News setProgress={setProgress}   key={"entertainment"} pageSize={6} country={"in"} category={"entertainment"} />}/>
        <Route exact path="/health" element={<News setProgress={setProgress}   key={"health"} pageSize={6} country={"in"} category={"health"} />}/>
        <Route exact path="/science" element={<News setProgress={setProgress}   key={"science"} pageSize={6} country={"in"} category={"science"} />}/>
        <Route exact path="/sports" element={<News setProgress={setProgress}   key={"sports"} pageSize={6} country={"in"} category={"sports"} />}/>
        <Route exact path="/technology" element={<News setProgress={setProgress}   key={"technology"} pageSize={6} country={"in"} category={"technology"} />}/>
        <Route exact path='/aboutUs' element={<About/>}/>
        </Routes>
      </div>
        </Router>
    )
  }
export default App