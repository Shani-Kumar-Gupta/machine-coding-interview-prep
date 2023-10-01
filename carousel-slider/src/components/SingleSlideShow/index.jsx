import './singleshow.css';

const SingleSlide = ({ imageURL, text, id }) => {
  return (
    <div className="singleslide__cnt">
      <div></div>
    </div>
  )
}

const SingleSlideShow = ({ imagedata }) => {
  return (
    <div className="singleslideshow__cnt">
      {imagedata.map(item => (
        <SingleSlide {...item} key={item.id} />
      ))}
    </div>
  );
};

export default SingleSlideShow;