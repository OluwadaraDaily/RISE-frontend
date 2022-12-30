import './LandingPageLayout.scss'
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

const LandingPageLayout = () => {
  return ( 
    <div className='main-layout'>
      <Header/>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
 
export default LandingPageLayout;