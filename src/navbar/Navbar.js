import { memo } from "react";
import "./Navbar.css";

const Navbar = () => {
  return <>
    <div className="navbar">
      <div className="title">AEON</div>
      <ul>
        <li><a href="/" className="active">Showcase</a></li>
        <li><a href="/">Docs</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Analytics</a></li>
        <li><a href="/">Templates</a></li>
        <li><a href="/">Enterprise</a></li>
      </ul>
      <input type="text" className="input-search" placeholder="Search documentation..." />
    </div>
  </>
}

export default memo(Navbar);