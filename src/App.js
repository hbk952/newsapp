import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Headlines from './components/Headlines';
import News from './components/News';
import Subscription from './pages/subscription';

function App() {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Headlines pageSize={pageSize} apiKey={apiKey} />} />
          <Route path="/others" element={<News pageSize={pageSize} apiKey={apiKey} />} />
          <Route path="/sports" element={<News pageSize={pageSize} apiKey={apiKey} category="sports" />} />
          <Route path="/science" element={<News pageSize={pageSize} apiKey={apiKey} category="science" />} />
          <Route path="/health" element={<News pageSize={pageSize} apiKey={apiKey} category="health" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
