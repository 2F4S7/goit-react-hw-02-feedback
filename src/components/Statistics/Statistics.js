import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveState }) => (
  <section>
    <p>
      <span>Good: {good}</span>
    </p>
    <p>
      <span>Neutral: {neutral}</span>
    </p>
    <p>
      <span>Bad: {bad}</span>
    </p>
    <p>
      <span>Total: {total}</span>
    </p>
    <p>
      <span>Positive feedback: {positiveState} %</span>
    </p>
  </section>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveState: PropTypes.number.isRequired,
};

export default Statistics;
