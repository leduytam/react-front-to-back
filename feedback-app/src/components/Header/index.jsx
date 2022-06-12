import PropTypes from 'prop-types';
import '../../styles/Header.css';

function Header({text}) {
  return (
    <header>
      <div className="header__container">
        <h2 className="header__text">{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Text'
}

Header.propTypes = {
  text: PropTypes.string
}

export default Header;
