import { FiDownload, FiGlobe, FiPlayCircle, FiUsers } from 'react-icons/fi';
import './FutureStrip.css';

const stats = [
  { Icon: FiUsers, number: '10k+', label: 'Active Users', className: 'future-strip__stat--violet' },
  { Icon: FiPlayCircle, number: '50k+', label: 'Reels Created', className: 'future-strip__stat--green' },
  { Icon: FiGlobe, number: '5K+', label: 'Creators', className: 'future-strip__stat--pink' },
  { Icon: FiDownload, number: '45k+', label: 'Downloads', className: 'future-strip__stat--orange' },
];

export default function FutureStrip() {
  return (
    <section className="future-strip">
      <div className="future-strip__inner">
        <div className="future-strip__copy">
          <h2>Future of<br />Social is Here</h2>
          <p>Be a part of the revolution.<br />Download <strong>GENZES</strong> now!</p>
        </div>

        <div className="future-strip__stats">
          {stats.map(({ Icon, number, label, className }) => (
            <article className={`future-strip__stat ${className}`} key={label}>
              <Icon aria-hidden="true" />
              <strong>{number}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
