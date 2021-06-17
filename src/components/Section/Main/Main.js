import React from 'react';
import PropTypes from 'prop-types';
import style from './Main.module.css';

const MainSection = ({ title, children }) => {
  return (
    <section className={style.main}>
      <h1 className={style.title}>{title}</h1>
      {children}
    </section>
  );
};

MainSection.defaultProps = {
  title: 'Statistics',
};

MainSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default MainSection;
