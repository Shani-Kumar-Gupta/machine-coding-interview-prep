import './slideshow.css';

const Slide = ({ imageURL, text }) => {
  return (
    <div className="slide">
      <img src={imageURL} alt={text} />
      <span>{text}</span>
    </div>
  );
};

const SlideShow = ({ imagedata }) => {
  const box = document.querySelector('.slideshow__cnt');
  const btnClickPrev = () => {
    let width = box.clientWidth;
    console.log("my width: " + width);
    box.scrollLeft = box.scrollLeft - width;
  }
  const btnClickNxt = () => {
    let width = box.clientWidth;
    console.log("my width: " + width);
    box.scrollLeft = box.scrollLeft + width;
  }
  return (
    <div className="slideshow__container">
      <div className="btn__container">
        <button className='pre__btn' onClick={() => { btnClickPrev()}}><p>&lt;</p></button>
        <button className='nxt__btn' onClick={() => { btnClickNxt()}}><p>&gt;</p></button>
      </div>
      <div className="slideshow__cnt">
        {imagedata.map((item) => (
          <Slide {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
