import React from "react";
import pic1 from "../../assets/Untitled design/pic1.avif";
import pic2 from "../../assets/Untitled design/pic2.png";
import pic3 from "../../assets/Untitled design/pic3.png";
import pic4 from "../../assets/Untitled design/pic4.png";
import pic5 from "../../assets/Untitled design/pic5.png";
import pic6 from "../../assets/Untitled design/pic6.jpeg";
import "./carousel.css";

const slidesData = [
  {
    image: pic1,
    title: "NK Communications Welcomes you",
    description:
      "Next Key Communications – Signifying that your agency is a key player in connecting brands to audiences. Building Reputations, Amplifying Brands",
    buttonText: "Get in Touch",
    interval: 3000,
  },
  {
    image: pic2,
    title: "Expert PR & Media Strategies",
    description:
      "NK Communications PR specializes in media relations, corporate communications, and digital PR to elevate your brand's presence.",
    buttonText: "Explore Services",
    interval: 2000,
  },
  {
    image: pic3,
    title: "Grow Your Brand with Us",
    description:
      "NK Communications PR specializes in media relations, corporate communications, and digital PR to elevate your brand's presence.",

    buttonText: "Learn More",
    interval: 3000,
  },
  {
    image: pic4,
    title: "Tailored Solutions for Your Brand",
    description:
      "From press releases to digital campaigns, we craft compelling stories.",

    buttonText: "Learn More",
    interval: 2000,
  },
  {
    image: pic5,
    title: "Expanding Brand Influence",
    description:
      "Tailored solutions to ensure your brand gets the right exposure.",
    buttonText: "Learn More",
    interval: 2000,
  },
  {
    image: pic6,
    title: "Join Us in Elevating Your Brand",
    description:
      "From press releases to digital campaigns, we craft compelling stories.",
    buttonText: "Learn More",
    interval: 2000,
  },
];

export default function CarouselComponent() {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        {/* Carousel Items */}
        <div className="carousel-inner">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval={slide.interval || 1000}
            >
              <img
                src={slide.image}
                className="w-100 img-fluid carousel-image"
                alt={`Slide ${index + 1}`}
              />

              {/* Centered Text Overlay */}
              <div className="carousel-caption position-absolute top-50 start-50 translate-middle text-center">
                <h1 className="text-white fw-bold">{slide.title}</h1>
                <p className="text-white">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
