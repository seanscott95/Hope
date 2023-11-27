import Figure from 'react-bootstrap/Figure';
import { FigureCaption } from 'react-bootstrap';

const Homepage = () => {
  return (
    <>
      <section className='container'>
        Learn about how the world has never been better
      </section>
      <section className='container'>
        <Figure>
          <Figure.Image 
            src='../public/assets/images/lifeExpectancyGloballySince1970.png'
            height='500'
            width='500'
            alt='Life Expectancy Globally Since 1970'
            fluid
          />
          <Figure.Caption>
            Data source: UN WPP (2022); HMD (2023); Zijdeman et al. (2015); Riley (2005)
          </Figure.Caption>
          <FigureCaption>
            <a href='https://ourworldindata.org/life-expectancy'>
              OurWorldInData.org/life-expectancy
            </a>
          </FigureCaption>
        </Figure>
      </section>
    </>
  );
};

export default Homepage;