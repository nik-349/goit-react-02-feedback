import section from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={section.title}>{title}</h1>
      {children}
    </>
  );
};
export default Section;
