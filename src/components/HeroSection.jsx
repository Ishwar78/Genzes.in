import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import {
  FaStar,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';
import { SiGoogleplay } from 'react-icons/si';

import userProof from '../assets/user-photo.png';
import { APP_LINKS } from '../lib/appLinks.js';

import './HeroSection.css';


/* =========================================
   SOCIAL MEDIA LINKS
========================================= */

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/genzesofficial/',
  facebook: 'https://www.facebook.com/genzesofficial/',
  youtube: 'https://www.youtube.com/@genzesofficial',
  twitter: 'https://x.com/genzesofficial',
  linkedin: 'https://in.linkedin.com/genzesofficial',
};


/* =========================================
   SOCIAL ICON DATA
========================================= */

const socialMedia = [
  {
    name: 'Instagram',
    href: SOCIAL_LINKS.instagram,
    icon: <FaInstagram />,
    className: 'hero-social--instagram',
  },
  {
    name: 'Facebook',
    href: SOCIAL_LINKS.facebook,
    icon: <FaFacebookF />,
    className: 'hero-social--facebook',
  },
  {
    name: 'YouTube',
    href: SOCIAL_LINKS.youtube,
    icon: <FaYoutube />,
    className: 'hero-social--youtube',
  },
  {
    name: 'Twitter / X',
    href: SOCIAL_LINKS.twitter,
    icon: <FaXTwitter />,
    className: 'hero-social--twitter',
  },
  {
    name: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: <FaLinkedinIn />,
    className: 'hero-social--linkedin',
  },
];


/* =========================================
   HERO VIDEOS
========================================= */

const HERO_VIDEOS = [
  '/video1.mp4',
  '/video2.mp4',
  '/video3.mp4',
];


export default function HeroSection() {

  /* =========================================
     RANDOM VIDEO ON REFRESH
  ========================================= */

  const [currentVideo, setCurrentVideo] = useState(() => {
    return Math.floor(Math.random() * HERO_VIDEOS.length);
  });


  /* =========================================
     NEXT VIDEO
  ========================================= */

  const nextVideo = () => {
    setCurrentVideo((prev) => {
      return (prev + 1) % HERO_VIDEOS.length;
    });
  };


  /* =========================================
     VIDEO ENDS
     Video jitni duration ki hogi,
     utni hi chalegi.
========================================= */

  useEffect(() => {
    return undefined;
  }, [currentVideo]);


  /* =========================================
     SCROLL TO FEATURES
  ========================================= */

  const scrollToFeatures = () => {
    document
      .getElementById('features')
      ?.scrollIntoView({
        behavior: 'smooth',
      });
  };


  return (
    <section className="hero-section">

      <div className="hero-section__inner">


        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <div className="hero-section__content">


          {/* =====================================
              LOGO
          ===================================== */}

          <div className="hero-section__logo">
            <img
              src="/logo.png"
              alt="GENZES Logo"
            />
          </div>


          {/* =====================================
              INDIA FIRST BADGE
          ===================================== */}

          <div className="hero-section__badge">

            <span className="hero-section__flag">
              
            </span>

            <span className="hero-section__badge-text">
              INDIA'S FIRST
            </span>

            <span
              className="hero-section__stars"
              aria-label="five stars"
            >
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>

          </div>


          {/* =====================================
              MAIN HEADING
          ===================================== */}

          <h1 className="hero-section__title">
            Social Media
            <br />
            <span>
              Platform
            </span>
          </h1>


          {/* =====================================
              ACTION BUTTONS
          ===================================== */}

          <div className="hero-section__actions">

            <button
              className="hero-section__secondary"
              type="button"
              onClick={scrollToFeatures}
            >
              Explore Features
              <FiArrowRight />
            </button>


            <a
              className="hero-section__store"
              href={APP_LINKS.playStore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download GENZES from Google Play"
            >

              <SiGoogleplay
                className="hero-section__store-icon"
                aria-hidden="true"
              />

              <span>
                <small>
                  GET IT ON
                </small>

                <strong>
                  Google Play
                </strong>
              </span>

            </a>

          </div>


          {/* =====================================
              USER PROOF + SOCIAL
          ===================================== */}

          <div className="hero-section__proof-area">

            <img
              className="hero-section__proof"
              src={userProof}
              alt="Join GENZES users across India"
            />


            <div className="hero-section__social">

              <div className="hero-section__social-title">

                <span className="hero-section__social-line" />

                <span>
                  FOLLOW GENZES
                </span>

                <span className="hero-section__social-line" />

              </div>


              <div className="hero-section__social-icons">

                {socialMedia.map((social) => (

                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hero-social ${social.className}`}
                    aria-label={`Follow GENZES on ${social.name}`}
                    title={social.name}
                  >

                    <span className="hero-social__glow" />

                    {social.icon}

                  </a>

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            RIGHT VIDEO
        ===================================== */}

        <div
          className="hero-section__visual"
          aria-label="GENZES app video preview"
        >

          {/* BACKGROUND GLOWS */}

          <div
            className="
              hero-section__glow
              hero-section__glow--one
            "
          />

          <div
            className="
              hero-section__glow
              hero-section__glow--two
            "
          />


          {/* =====================================
              VIDEO WRAPPER
          ===================================== */}

          <div className="hero-section__video-wrapper">

            <video
              key={HERO_VIDEOS[currentVideo]}
              className="hero-section__video"
              src={HERO_VIDEOS[currentVideo]}
              autoPlay
              controls
              playsInline
              preload="auto"
              onEnded={nextVideo}
            />

          </div>


          {/* =====================================
              VIDEO DOTS
          ===================================== */}

          <div
            className="hero-section__video-dots"
            aria-label="Video slider controls"
          >

            {HERO_VIDEOS.map((_, index) => (

              <button
                key={index}
                type="button"
                className={`
                  hero-section__video-dot
                  ${
                    index === currentVideo
                      ? 'hero-section__video-dot--active'
                      : ''
                  }
                `}
                onClick={() => setCurrentVideo(index)}
                aria-label={`Show video ${index + 1}`}
                aria-current={
                  index === currentVideo
                    ? 'true'
                    : undefined
                }
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}