import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h3 className={s.title}>Upload stats</h3>}

      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: stat.color }}
          >
            <p className={s.label}>{stat.label}</p>
            <p class={s.percentage}>{stat.percentage}%</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
