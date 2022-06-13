import PropTypes from 'prop-types';
import '../../styles/Card.css';

function Card({ className, children }) {
  return <div className={`card ${className}`}>{children}</div>;
}

Card.defaultProps = {
  className: '',
  children: null
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Card;
