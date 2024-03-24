const ConditionalWrapper = ({ condition, children }) => {
  return condition ? <>{children}</> : <div className="section-item animated fadeInLeft active">{children}</div>;
};
export default ConditionalWrapper;
