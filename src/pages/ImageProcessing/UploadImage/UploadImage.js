import './UploadImage.scss'

const UploadImage = () => {
  return ( 
    <div className='upload-image-section'>
      <h1 className="bold-text">Garage Image</h1>
      <div className="search-box">
        <input type="text" name="search" />
      </div>
      <div className="drop-image-section">

      </div>
    </div>
  );
}
 
export default UploadImage;