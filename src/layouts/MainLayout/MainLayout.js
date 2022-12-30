import './MainLayout.scss'
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';

const MainLayout = () => {
  return ( 
    <div>
      <Header/>
      <main>
        <Outlet></Outlet>
      </main>
    </div>  
  );
}

export default MainLayout;