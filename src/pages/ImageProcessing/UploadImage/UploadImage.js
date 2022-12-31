import './UploadImage.scss'
import * as AntDesignIcon from 'react-icons/ai'
import * as BoxIcons from 'react-icons/bi'
import React from 'react';

const UploadImage = () => {
  const cameraIcon = React.createElement(AntDesignIcon["AiFillCamera"])
  const uploadIcon = React.createElement(AntDesignIcon["AiOutlineCloudUpload"])
  const searchIcon = React.createElement(BoxIcons["BiSearchAlt"])
  // AiOutlineCloudUpload
  return ( 
    <div className='upload-image-section'>
      <h1 className="bold-text">Garage Image</h1>
      <div className="search-box">
        <input type="text" name="search" />
        <div>
          <i>{cameraIcon}</i>
          <i>{searchIcon}</i>
        </div>
      </div>
      <div className="drop-image-section">
      <div className="upload-icon">
        <i>{uploadIcon}</i>
      </div>
        <p className="text">Drag & drop an image or browse</p>
      </div>
    </div>
  );
}
 
export default UploadImage;