import React from 'react';
import PropTypes from 'prop-types';

//компонент Статистика.
// В параметрах приходяд пропсы переданные родителем - клаcса App
const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedback:{positive} %</span>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
export default Statistics;
