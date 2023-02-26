import { Link } from "react-router-dom";
import logo from "../assets/img/logo-footer.png";

const Fotter = () => {
  return (
    <footer className="section-padding">
      <div className="container">
        <div className="footer-container">
          <div>
            <div>
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
              <p>
                Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                augue, eu vulputate magna eros eu erat.
              </p>
            </div>
            <div className="">
              <h4 className="widget-title">Useful Links</h4>
              <ul>
                <li>
                  <Link to={"/"}>Useful Links</Link>
                </li>
                <li>
                  <Link to={"/"}>About Media</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="">
              <h4 className="widget-title">Useful Links</h4>
              <ul>
                <li>
                  <Link to={"/"}>Useful Links</Link>
                </li>
                <li>
                  <Link to={"/"}>About Media</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="widget-title">Useful Links</h4>
              <ul>
                <li>
                  <Link to={"/"}>Useful Links</Link>
                </li>
                <li>
                  <Link to={"/"}>About Media</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
