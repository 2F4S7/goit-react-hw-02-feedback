import React from 'react';
import PropTypes from 'prop-types';
import style from './Feedbacl.module.css';

const Feedback = function ({ createFeedback }) {
  return (
    <div>
      <button className={style.button} type="button" onClick={createFeedback}>
        Good
      </button>
      <button className={style.button} type="button" onClick={createFeedback}>
        Neutral
      </button>
      <button className={style.button} type="button" onClick={createFeedback}>
        Bad
      </button>
    </div>
  );
};

export default Feedback;
