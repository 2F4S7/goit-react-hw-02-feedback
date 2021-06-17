import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.css';

const HeaderSection = ({ title, children }) => {
  return (
    <section className={style.header}>
      <h1 className={style.title}>{title}</h1>
      {children}
    </section>
  );
};

HeaderSection.defaultProps = {
  title: 'Statistics',
};

HeaderSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default HeaderSection;
