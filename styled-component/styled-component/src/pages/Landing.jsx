import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Slider } from '../components/styles/Slider.styled';
import FilterContainer from '../components/FilterContainer';

function Landing() {
  return (
    <>
      <Slider>
        <FaArrowLeft className="left" /> <FaArrowRight className="right" />
      </Slider>
      <FilterContainer />
    </>
  );
}

export default Landing;
