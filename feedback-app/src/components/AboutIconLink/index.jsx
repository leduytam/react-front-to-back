import { FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../styles/AboutIconLink.css';

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='about'>
        <FaQuestionCircle size={50} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
