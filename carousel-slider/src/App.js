import './App.css';
import SingleSlideShow from './components/SingleSlideShow';
import SlideShow from './components/SlideShow';
import data from './constant/data';

function App() {
  return (
    <div className="App">
      <h1>Multi Carousel Slider</h1>
      <SlideShow imagedata={data} />
      <h1>Single Carousel Slider</h1>
      <SingleSlideShow imagedata={data} />
    </div>
  );
}

export default App;
