import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> <span>SAINT</span>AURUM
            </h6>
            <p>
              Saintarum is a fashion brand offering luxurious, affordable
              clothing for the stylish and young-at-heart. Our designs are
              inspired by the latest trends and prioritize comfort, durability,
              and style. We provide a wide range of versatile clothing for any
              occasion.
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play" />
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
              <li>
                <a href="#">Refunds/Returns</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            {/* <ul>
              <li>Information</li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Find a store</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Bacome a member</a>
              </li>
              <li>
                <a href="#">Site feedback</a>
              </li>
            </ul> */}
            <ul>
              <li>Contact</li>
              <li>
                <a href="#">admin@saintarum.com</a>
              </li>
              <li>
                <a href="#">Hotline: +1 131 138 138</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>
            Developed·By{"·"}
            <a href="https://somadetoluwani.vercel.app"> {"Toluwani Somade"} </a> ©2025 ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
