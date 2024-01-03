const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>Bahut bhook lagi h.</h3>}</>;
};

export default ErrorMessage;