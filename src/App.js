import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';

// Layouts
import MainLayout from './layouts/MainLayout/MainLayout';

// Pages
import Home from './pages/Home/Home';
import AboutUs from './pages/Home/AboutUs/AboutUs';
import Settings from './pages/Home/Settings/Settings';
import HowItWorks from './pages/Home/HowItWorks/HowItWorks';
import ImageProcessingLayout from './layouts/ImageProcessingLayout/ImageProcessingLayout';
import UploadImage from './pages/ImageProcessing/UploadImage/UploadImage';
import LandingPageLayout from './layouts/LandingPageLayout/LandingPageLayout';

// Create a browser router with layouts and pages under that layout
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path="" element={<LandingPageLayout/>}>
        <Route index element={ <Home/> } />
        <Route path="about-us" element={ <AboutUs/> } />
        <Route path="settings" element={ <Settings/> } />
        <Route path="how-it-works" element={ <HowItWorks/> } />
      </Route>
      <Route path='image' element={ <ImageProcessingLayout/> }>
        <Route path='upload' element={<UploadImage/>}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
