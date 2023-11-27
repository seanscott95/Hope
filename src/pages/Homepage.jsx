import LifeExpectancy from '../components/LifeExpectancy';

const Homepage = () => {
  return (
    <div className='bg-primary bg-gradient'>
      <section 
        className='container d-flex justify-content-center align-items-end'
        style={{
          backgroundImage: `url('../public/assets/images/greenLandscape.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width:'100%',
          height: '40vw',
          maxHeight: '600px',
        }}
      >
        <h2 className='pb-2 display-1'>LEARN HOW THE WORLD HAS NEVER BEEN BETTER</h2>
      </section>
      <LifeExpectancy />
    </div>
  );
};

export default Homepage;