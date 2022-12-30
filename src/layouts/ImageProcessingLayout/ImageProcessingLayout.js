import { Outlet } from 'react-router-dom';
import './ImageProcessingLayout.scss'

const ImageProcessingLayout = () => {
  return ( 
    <div className='image-processing-layout'>
      <Outlet></Outlet>
    </div>
  );
}
 
export default ImageProcessingLayout;