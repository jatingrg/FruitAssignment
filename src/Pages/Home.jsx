import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="app-container">
      <header className="app-header">
        Fruit.Ai
        <p className="tagline">"Be Healthy!"</p>
      </header>
      <nav className="app-navigation">
        <Link to="/chat" className="nav-button chat"><span>Chat</span></Link>
        <Link to="/translator" className="nav-button translate"><span>G Translate</span></Link>
        <Link to="/faq" className="nav-button faqs"><span>FAQs</span></Link>
        <Link to="/about" className="nav-button about"><span>About</span></Link>
      </nav>
    </div>
  );
}

export default Home;
