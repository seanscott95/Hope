import Figure from 'react-bootstrap/Figure';
import { FigureCaption } from 'react-bootstrap';

const LifeExpectancy = () => {
  return (
    <section className='container p-2 mt-2 d-flex justify-content-center bg-light bg-gradient rounded text-dark'>
        <Figure className='flex-column align-items-center pt-4'>
          <Figure.Image 
            src='../public/assets/images/lifeExpectancyGloballySince1970.png'
            height={500}
            width={500}
            alt='Life Expectancy Globally Since 1970'
            fluid
            rounded
          />
          <FigureCaption className='p-2 d-flex flex-column justify-content-center bg-light rounded'>
            Data source: UN WPP (2022); HMD (2023); Zijdeman et al. (2015); Riley (2005)
            <a href='https://ourworldindata.org/life-expectancy'>
              OurWorldInData.org/life-expectancy
            </a>
          </FigureCaption>
        </Figure>
        <div className='m-3 w-50'>
          <h2 className='display-5'>Life Expectancy</h2>
          <p>
            This chart shows the <span className='fw-bold'>incredible increase</span> in life expectancy during the last few centuries.
          </p>
          <p>All countries over the world have been able to increase their life expectancy by at least <span className='fw-bold'>double</span> due to the
            progress in health for their citizens.
          </p>
          <p>
          <span className='fw-bold'>UK</span> life expectancy has doubled in a little over 100 years and is now above 80 years.
          </p>
          <p>
            Countries like <span className='fw-bold'>Japan</span> may have started later in improving their health but have been able to overtake countries such as the UK since the late 1960&apos;s.
          </p>
          <p>
            Over 100 years ago the life expectancy for <span className='fw-bold'>India</span> and <span className='fw-bold'>South Korea</span> was at a devastating low of only 23 years. In that time life expectancy for India has just about tripled and South Korea who was far behind countries such as the UK has has an astonishing amount of growth that they have almost quadrupled their life expectancy.
          </p>
        </div>
      </section>
  );
};

export default LifeExpectancy;