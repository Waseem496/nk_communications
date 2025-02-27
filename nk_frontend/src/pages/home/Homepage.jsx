import "./home.css";
import CarouselComponent from "../../Components/carousel/Carousel";
import { Container} from "react-bootstrap";

import Footer from "../../Components/Footer/footer";

export default function HomePage() {
  return (
    <div className=" text-center bg-black text-white">
      <div className="carousel-container">
        <CarouselComponent />
      </div>

      <Container fluid className="py-5 bg-dark-blue">
        <Container>
          <h2 className="about-title text-center text-sky-blue">Who we are</h2>
          <p className="about-text text-center text-white">
            <strong>NK Communications</strong> is a premier PR and communications firm with <strong>19 years of experience</strong>,  
            specializing in <strong>strategic brand visibility, press coverage, event management, and celebrity interactions</strong>.  
            We have a strong presence across India, helping businesses build credibility, amplify their voice, and leave a lasting impact.
          </p>
        </Container>
      </Container>
      <section className=" py-5">
        <h2 className="text-center text-primary-custom fw-bold">
          Our Core Services
        </h2>
        <div className="row mt-4 p-6">
          <div className="col-md-4">
            <div className="card custom-card text-white text-center p-4">
              <h4 className="text-sky-blue">Media Relations</h4>
              <p>
                We connect brands with top-tier media outlets to maximize
                exposure.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card text-white text-center p-4">
              <h4 className="text-sky-blue">Corporate PR</h4>
              <p>
                We craft compelling narratives to strengthen corporate
                reputation.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card text-white text-center p-4">
              <h4 className="text-sky-blue">Digital PR</h4>
              <p>
                Our strategies leverage emerging media to drive impactful
                engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
