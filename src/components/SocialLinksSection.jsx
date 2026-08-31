import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';

import './SocialLinksSection.css';


/* =========================================
   SOCIAL MEDIA LINKS

   YAHAN APNE ACTUAL LINKS ADD KAR DENA
========================================= */

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://x.com/',
  linkedin: 'https://www.linkedin.com/',
};


/* =========================================
   SOCIAL MEDIA DATA
========================================= */

const socialItems = [
  {
    title: 'Instagram',

    subtitle:
      'Reels, updates & creator moments',

    icon: <FaInstagram />,

    href: SOCIAL_LINKS.instagram,

    className:
      'social-links__card--instagram',
  },

  {
    title: 'Facebook',

    subtitle:
      'Community, posts & announcements',

    icon: <FaFacebookF />,

    href: SOCIAL_LINKS.facebook,

    className:
      'social-links__card--facebook',
  },

  {
    title: 'Twitter / X',

    subtitle:
      'Latest news, trends & quick updates',

    icon: <FaXTwitter />,

    href: SOCIAL_LINKS.twitter,

    className:
      'social-links__card--twitter',
  },

  {
    title: 'LinkedIn',

    subtitle:
      'Professional growth & brand presence',

    icon: <FaLinkedinIn />,

    href: SOCIAL_LINKS.linkedin,

    className:
      'social-links__card--linkedin',
  },
];


export default function SocialLinksSection() {

  return (

    <section className="social-links-section">

      <div className="social-links-section__inner">


        {/* =================================
            SECTION HEADING
        =================================` */}

        <div className="social-links-section__header">

          {/* <span className="social-links-section__badge">
            CONNECT WITH GENZES
          </span> */}


          <h2>

            Follow Us On{' '}

            <span>
              Social Media
            </span>

          </h2>


          {/* <p>

            Stay connected with GENZES across all major
            platforms. Explore updates, community posts,
            creator content and the latest announcements.

          </p> */}

        </div>



        {/* =================================
            SOCIAL MEDIA CARDS
        ================================= */}

        <div className="social-links-section__grid">

          {socialItems.map((item) => (

            <a
              key={item.title}

              className={`
                social-links__card
                ${item.className}
              `}

              href={item.href}

              target="_blank"

              rel="noopener noreferrer"

              aria-label={`Visit GENZES on ${item.title}`}
            >


              {/* CARD GLOW */}

              <div className="social-links__card-glow" />


              {/* ICON */}

              <div className="social-links__icon">

                {item.icon}

              </div>


              {/* CONTENT */}

              <div className="social-links__content">

                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.subtitle}
                </p>

              </div>


              {/* BUTTON */}

              <span className="social-links__cta">

                Follow Now

              </span>


            </a>

          ))}

        </div>


      </div>

    </section>

  );
}