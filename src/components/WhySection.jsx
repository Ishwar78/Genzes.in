import { FiTrendingUp, FiUsers, FiVideo } from 'react-icons/fi';
import { PiWalletBold } from 'react-icons/pi';
import './WhySection.css';

const features = [
  {
    Icon: FiVideo,
    title: 'Create & Share',
    text: 'Share short videos, reels, photos, stories and express yourself.',
    className: 'why-section__icon--pink',
  },
  {
    Icon: FiUsers,
    title: 'Connect & Engage',
    text: 'Follow friends, interact, collab and build your community.',
    className: 'why-section__icon--blue',
  },
  {
    Icon: FiTrendingUp,
    title: 'Grow Your Brand',
    text: 'Build your audience, increase reach and become a creator.',
    className: 'why-section__icon--green',
  },
  {
    Icon: PiWalletBold,
    title: 'Earn & Monetize',
    text: 'Earn rewards, brand deals, and monetize your amazing content.',
    className: 'why-section__icon--orange',
  },
];

export default function WhySection() {
  return (
    <section className="why-section" id="features">
      <div className="why-section__inner">
        <header className="why-section__heading">
          <h2>
            Why <span>GENZES?</span>
          </h2>
          <p>More than just a social media app.<br />It’s a complete creator ecosystem.</p>
        </header>

        <div className="why-section__grid">
          {features.map(({ Icon, title, text, className }) => (
            <article className="why-section__card" key={title}>
              <div className={`why-section__icon ${className}`}>
                <Icon aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
