import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Slider } from '../components/styles/Slider.styled';

function Landing() {
  return (
    <Slider>
      <FaArrowLeft className="left" /> <FaArrowRight className="right" />
    </Slider>
  );
}

export default Landing;
