import './MainLayout.scss'
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';

const MainLayout = () => {
  return ( 
    <>
      <Outlet></Outlet>
    </> 
  );
}

export default MainLayout;