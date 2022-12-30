import './HowItWorks.scss'

const HowItWorks = () => {
  return ( 
    <div className="info-text-section">
      <h1 className="bold-text">How it works</h1>
      <p className="text">
        Garage image search uses reverse image search and allows users to search for related 
        images just by uploading an image or image URL. 
        Garage image search  accomplishes this by analyzing the submitted picture and 
        constructing a mathematical model of it using advanced algorithms. 
        It is then compared with billions of other images in Google's databases before 
        returning matching and similar results. When available, It also uses metadata about 
        the image such as description.
      </p>
    </div>
  );
}
 
export default HowItWorks;