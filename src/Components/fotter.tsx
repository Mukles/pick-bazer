import { Link } from "react-router-dom";
import logo from "../assets/img/logo-footer.png";
import payments from "../assets/img/payments.png";
import { data } from "../data/footer/footer";
import SocalLinks from "../helpers/socail-links";

const Fotter = () => {
  return (
    <footer className="section-padding">
      <div className="container">
        <div className="footer-container">
          <div>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
            <p>
              Praesent dapibus, neque id cursus ucibus, tortor neque egestas
              augue, eu vulputate magna eros eu erat.
            </p>
            <ul>
              <li>
                <Link to={"/"}></Link>
              </li>
            </ul>
            <SocalLinks className="footer-socal" />
          </div>
          {data.map((item, i) => (
            <div key={i}>
              <h4 className="widget-title">{item.title}</h4>
              <ul>
                {item.links.map(({ id, link, text }, i) => (
                  <li key={id}>
                    <Link to={link}>{text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2023 Molla Store. All Rights Reserved.</p>
          <div>
            <img src={payments} alt="payments" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
