import { Link } from 'react-router-dom';
import './Home.scss'

const Home = () => {
  return ( 
    <div>
      <h1>Home page...</h1>
      <Link to="image/upload">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
 
export default Home;