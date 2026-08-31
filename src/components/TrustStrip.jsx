import { FiLock, FiShield } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { PiCurrencyInrBold } from 'react-icons/pi';
import './TrustStrip.css';

const items = [
  {
    Icon: FiShield,
    title: '100% Made in India',
    text: 'Proudly built for Bharat 🇮🇳',
    className: 'trust-strip__icon--pink',
  },
  {
    Icon: FiLock,
    title: 'Secure & Private',
    text: 'Your privacy is our priority',
    className: 'trust-strip__icon--blue',
  },
  {
    Icon: HiOutlineUserGroup,
    title: 'For Everyone',
    text: 'Creators, brands, and communities',
    className: 'trust-strip__icon--green',
  },
  {
    Icon: PiCurrencyInrBold,
    title: 'Earn & Grow',
    text: 'Monetize your content and skills',
    className: 'trust-strip__icon--orange',
  },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="GENZES benefits">
      <div className="trust-strip__inner">
        {items.map(({ Icon, title, text, className }) => (
          <article className="trust-strip__item" key={title}>
            <span className={`trust-strip__icon ${className}`}>
              <Icon aria-hidden="true" />
            </span>

            <div className="trust-strip__content">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}