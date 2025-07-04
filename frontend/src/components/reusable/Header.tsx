import '../../styles/components/reusable/Header.css'

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <ul>
          <Link to="/">
            <li><a className='navButton'>Home</a></li>
          </Link>
          <Link to="/about">
            <li><a className='navButton'>About me</a></li>
          </Link>
          <Link to="/">
            <li><a className='navButton'>Contact</a></li>
          </Link>
          <Link to="/">
            <li><a className='navButton'>Projects</a></li>
          </Link>
          <Link to="/">
            <li><a className='navButton'>Blog</a></li>
          </Link>
          <Link to="/">
            <li><a className='navButton'>Leave a comment</a></li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}