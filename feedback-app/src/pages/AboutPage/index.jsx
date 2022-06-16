import { Link } from 'react-router-dom';
import { Card } from '../../components';
import '../../styles/AboutPage.css';

function AboutPage() {
  return (
    <Card className='about'>
      <h1>About Page</h1>
      <p>Student: Lê Duy Tâm</p>
      <p>Student ID: 20127619</p>
      <p>Email: ldtam20@clc.fitus.edu.vn</p>

      <p>
        <a href='https://www.udemy.com/course/react-front-to-back-2022'>
          Link of this course
        </a>
      </p>

      <p>
        <Link to='/'>Back To Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
