import './singleshow.css';

const SingleSlide = () => {
  return (
    <div className="singleslide__cnt">
      Single Slide
    </div>
  )
}

const SingleSlideShow = ({ imagedata }) => {
  return (
    <div className="singleslideshow__cnt">
      <SingleSlide />
    </div>
  );
};

export default SingleSlideShow;