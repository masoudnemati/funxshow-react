import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-left">
          <h3>
            Web Design by
            <a
              href="https://atyal.ir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="atyal"> Atyal.ir</span>
            </a>
          </h3>

          <p className="newvertex-thanks">
            With special thanks to{" "}
            <a
              href="https://www.aparat.com/newvertex/live"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="newvertex">newvertex</span>
            </a>
          </p>

          <p className="rights">
            &copy; 2020-{new Date().getFullYear()} funxshow.vercel.app
            <br />
            All rights reserved.
          </p>
        </div>
        <div className="footer-center">
          <a
            href="https://dono.gg/funxshow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="donate">DONATE ME!</h3>
            <ul>
              <li>Make me happy</li>
              <li>Give me energy</li>
              <li>Improve my work</li>
              <li>Make my stream better</li>
              <li>Buy new stream devices</li>
              <li>Upgrade my stream devices</li>
            </ul>
          </a>
        </div>
        <div className="footer-right">
          <img src="/images/footer-right-img.png" height="300" alt="footer" />
        </div>
      </footer>

      <style jsx>{`
        footer {
          margin: 0;
          margin-top: 100px;
          padding: 30px 5vw 0 5vw;
          color: white;
          background-color: #0e0e0e;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: nowrap;
        }
        .footer-left {
          width: 300px;
        }
        .footer-right {
          width: 250px;
        }
        footer h3 {
          font-size: 2rem;
        }
        footer a {
          color: inherit;
          text-decoration: none;
        }
        .atyal {
          color: #519ddf;
          font-family: "Audiowide", cursive;
          padding-right: 24px;
          padding-top: 5px;
          font-weight: bolder;
        }
        .newvertex-thanks {
          font-size: 1.5rem;
          padding-top: 7px;
        }
        .newvertex {
          color: #ae3e56;
          font-family: "Audiowide", cursive;
          padding-right: 24px;
          padding-top: 5px;
        }
        .rights {
          color: lightgray;
          font-size: 1.4rem;
          padding-top: 75px;
        }
        .footer-center {
          width: 290px;
          transition: all 1s linear;
        }
        .donate {
          font-size: 2.2rem;
          padding: 15px 15px 10px 48px;
          background-color: #34322d;
          background-image: url("/images/icons8-gift-48.png");
          background-position: 7px 10px;
          background-repeat: no-repeat;
          background-size: 40px;
          font-family: "Audiowide", cursive;
          border: 2px solid #b54242;
          border-bottom: none;
          border-radius: 20px 20px 0 0;
        }
        footer ul {
          padding: 10px 20px 20px 30px;
          background-image: linear-gradient(#34322d, rgba(255, 255, 0, 0));
          border: solid;
          border-image-slice: 1;
          border-width: 0 2px 0 2px;
          border-image-source: linear-gradient(to bottom, #b54242, #b4b4b400);
        }
        footer li {
          font-size: 1.2rem;
        }
        footer img {
          margin: 0;
          margin-top: -70px;
          padding: 0;
        }
        .atyal:hover,
        .newvertex:hover {
          background-image: url("/images/icons8-link-64.png");
          background-position: top right;
          background-repeat: no-repeat;
          background-size: 20px;
        }
        .footer-center:hover {
          color: #488dc9;
          background-image: linear-gradient(rgba(255, 255, 0, 0), #34322d);
          letter-spacing: 2px;
        }
        @media only screen and (max-width: 900px) {
          footer {
            justify-content: center;
            flex-direction: column-reverse;
          }
          .footer-left,
          .footer-center,
          .footer-right {
            width: 100%;
          }
          .footer-center {
            padding-top: 60px;
          }
          .footer-left {
            padding-top: 50px;
            padding-bottom: 25px;
          }
          /* img {
            margin: 0;
            padding: 20px;
          } */
        }
      `}</style>
    </>
  );
};

export default Footer;
