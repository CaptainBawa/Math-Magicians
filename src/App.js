import './App.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Calculator from './Components/Calculator';
import GetQuotes from './Components/getQuote';
import Home from './Components/home';
import NavigationLinks from './Components/navBar';
import Footer from './Components/footer';

const App = () => (
  <BrowserRouter>
    <NavigationLinks />
    <div className="cal-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<GetQuotes />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
);

export default App;
