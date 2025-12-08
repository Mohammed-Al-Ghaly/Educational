import { FaArrowRight } from "react-icons/fa";

function Header() {
  return (
    <header id="header">
      <nav className="navbar">
        <a href="#" className="logo">
          EduBridge
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Puoduct</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="account">
          <a href="#">Login</a>
          <a href="#" className="btn-join">
            Join Us <FaArrowRight />
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Header;
