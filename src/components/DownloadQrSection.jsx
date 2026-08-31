import React from "react";

import {
  FaGooglePlay,
  FaQrcode,
  FaArrowRight,
} from "react-icons/fa";

import qrCode from "../assets/Qrcode.jpeg";

import "./DownloadQrSection.css";


export default function DownloadQrSection() {

  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.genzes.app";


  return (
    <section className="qr-download-section">

      <div className="qr-download-glow qr-glow-left"></div>
      <div className="qr-download-glow qr-glow-right"></div>


      <div className="qr-download-container">


        {/* ================================= */}
        {/* LEFT CONTENT */}
        {/* ================================= */}

        <div className="qr-download-content">

          <div className="qr-download-badge">

            <FaGooglePlay />

            <span>
              AVAILABLE ON GOOGLE PLAY
            </span>

          </div>


          <h2>
            Get GENZES
            <br />

            <span>
              On Your Phone.
            </span>
          </h2>


          <p>
            Join India's new social media experience.
            Watch reels, create content, connect with
            people and grow your digital presence
            with GENZES.
          </p>


          <div className="qr-download-points">

            <div>
              <span className="qr-point-dot"></span>
              Watch Trending Reels
            </div>

            <div>
              <span className="qr-point-dot"></span>
              Create & Share Content
            </div>

            <div>
              <span className="qr-point-dot"></span>
              Connect With New People
            </div>

          </div>


          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="qr-playstore-button"
          >

            <FaGooglePlay />

            <div>
              <small>
                GET IT ON
              </small>

              <strong>
                Google Play
              </strong>
            </div>

            <FaArrowRight className="qr-button-arrow" />

          </a>

        </div>



        {/* ================================= */}
        {/* RIGHT QR AREA */}
        {/* ================================= */}

        <div className="qr-download-right">

          <div className="qr-main-card">


            <div className="qr-card-icon">
              <FaQrcode />
            </div>


            <h3>
              Scan to Download
            </h3>


            <p>
              Open your camera and scan the QR code
              to download GENZES from Google Play.
            </p>


            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="qr-code-wrapper"
            >

              <div className="qr-corner qr-corner-one"></div>
              <div className="qr-corner qr-corner-two"></div>
              <div className="qr-corner qr-corner-three"></div>
              <div className="qr-corner qr-corner-four"></div>


              <img
                src={qrCode}
                alt="Scan QR code to download GENZES app"
                className="qr-code-image"
              />

            </a>


            <span className="qr-scan-text">
              SCAN • DOWNLOAD • CONNECT
            </span>


          </div>


          {/* <div className="qr-floating-card qr-floating-one">
            <span>🔥</span>

            <div>
              <strong>
                Trending
              </strong>

              <small>
                Reels everyday
              </small>
            </div>
          </div> */}


          {/* <div className="qr-floating-card qr-floating-two">
            <span>🚀</span>

            <div>
              <strong>
                Create
              </strong>

              <small>
                Grow your reach
              </small>
            </div>
          </div> */}

        </div>

      </div>

    </section>
  );
}