import './home.css';
import CarouselComponent from '../../Components/Carousel';

export default function HomePage() {
  return (
    <div className=' text-center bg-black text-white'>
      <div className='carousel-container'>
      <CarouselComponent />
      </div>
      <section className=" py-5">
        <h2 className="text-center text-primary-custom fw-bold">Our Core Services</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card bg-dark-blue border-0 shadow-lg text-white text-center p-4">
              <h4 className="text-sky-blue">Media Relations</h4>
              <p>We connect brands with top-tier media outlets to maximize exposure.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark-blue border-0 shadow-lg text-white text-center p-4">
              <h4 className="text-sky-blue">Corporate PR</h4>
              <p>We craft compelling narratives to strengthen corporate reputation.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark-blue border-0 shadow-lg text-white text-center p-4">
              <h4 className="text-sky-blue">Digital PR</h4>
              <p>Our strategies leverage emerging media to drive impactful engagement.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
