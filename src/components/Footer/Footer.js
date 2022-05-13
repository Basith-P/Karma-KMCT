import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// import footer_kmct from "./footer_kmct.svg";
// import footer_karma from "./footer_karma.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.elements}>
        <div className={classes.logoBox}>
          <img
            src="assets/footer_karma.svg"
            alt="/"
            className={classes.footer_karma}
          />
          <img
            src="assets/footer_kmct.svg"
            alt="/"
            className={classes.footer_kmct}
          />
        </div>
        <div className={classes.socialIcons}>
          <a
            className={classes.anchor}
            href="https://www.facebook.com/karma.kmct/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={classes.social} icon={faFacebook} />
          </a>
          <a
            className={classes.anchor}
            href="https://www.youtube.com/channel/UCKM314A0KndJAEpvEnaxO2g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={classes.social} icon={faYoutube} />
          </a>
          <a
            className={classes.anchor}
            href="https://instagram.com/karma.kmct"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={classes.social} icon={faInstagram} />
          </a>
        </div>
        <div className={classes.linkBox}>
          <ul className={classes.links}>
            <a
              href="https://docs.google.com/document/d/1pp2-0qGvWY1rKCDeXt6nEyd7e2XwUqDufYCE8AYVIaM/edit?usp=sharing"
              style={{ color: "white", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Contact Us</li>
            </a>
            <li>
              <a
                href="https://docs.google.com/document/d/1cJfjOhoEfW_JhiMF-tUJXNWwRKxSIN-KrIlJCnh0EZ4/edit?usp=sharing"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1VOnAodNTeF8ShOCxxVb_AXnxLKg2jKZCUY0QxbQd4nE/edit?usp=sharing"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1K0En27BTf6KJB2eHZmnr7BAMDWK8T83--8HJOu-GkA0/edit?usp=sharing"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cancellation / Refund Policy
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1DVGB-PePPd7XCNW4LAJ6qBShudKzBJtuaAaiC6Q1DWY/edit?usp=sharing"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Shipping Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.copyright}>
        <h2>Karma'22 | All Rights Reserved © Kedilo</h2>
      </div>
    </footer>
  );
};

export default Footer;
