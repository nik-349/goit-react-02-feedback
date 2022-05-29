import section from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={section.title}>{title}</h1>
      {children}
    </>
  );
};

Section.propType = {
  title: PropTypes.string,
};

export default Section;
