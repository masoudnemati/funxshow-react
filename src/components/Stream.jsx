import React from "react";

const Stream = () => {
  return (
    <>
      <section className="stream-main">
        <div className="streams-content">
          <h2>Watch My Stream!</h2>

          <div className="streams">
            <a
              href="https://www.aparat.com/funxshow/live"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="aparat">
                <img
                  width="175"
                  src="/images/logo--color-white--without_text.svg"
                  alt="aparat"
                />
              </div>
            </a>
            <a
              href="https://www.twitch.tv/funxshow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="twitch">
                <img width="200" src="/images/twitch_PNG31.png" alt="twitch" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .stream-main {
          justify-content: center;
          text-align: center;
          padding: 170px 5vw 150px 5vw;
          margin: 0 auto;
          margin-top: -160px;
          background: url("/images/streams-left-bg.png") left center no-repeat,
            url("/images/streams-right-bg.png") right center no-repeat;
          background-size: 500px, 515px;
          max-width: 1200px;
        }
        .streams-content {
          margin-top: -60px;
        }
        .stream-main h2 {
          color: #00c6b6;
          font-style: normal;
          font-size: 3rem;
          background-image: url("/images/streams-bg.svg");
          background-repeat: no-repeat;
          background-size: 300px;
          background-position: center bottom;
          text-shadow: 2px 2px 4px #000000;
        }
        .streams {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          /* background-image: url("/images/streams-bg.svg");
          background-position: center;
          background-size: 800px;
          background-repeat: no-repeat; */
          margin: 0;
        }
        .aparat,
        .twitch {
          width: 240px;
          margin: 20px;
          background-color: #292929;
          transition: all 0.4s linear;
        }
        .aparat {
          padding: 10px;
          border: 1px solid #ed145b;
          border-radius: 5px;
        }
        .twitch {
          padding: 10px;
          padding-top: 20px;
          border: 1px solid #71299f;
          border-radius: 5px;
        }
        .aparat:hover,
        .twitch:hover {
          background-color: black;
        }
        .aparat:hover {
          box-shadow: inset 0 0 15px #ed145b;
        }
        .twitch:hover {
          box-shadow: inset 0 0 15px #71299f;
        }
        @media only screen and (max-width: 700px) {
          .stream-main section {
            background: none;
            padding-bottom: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Stream;
