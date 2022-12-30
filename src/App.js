import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';

// Layouts
import MainLayout from './layouts/MainLayout/MainLayout';

// Pages
import Home from './pages/Home/Home';

// Create a browser router with layouts and pages under that layout
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={ <Home/> } />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
