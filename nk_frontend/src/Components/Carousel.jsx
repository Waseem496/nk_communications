import React from "react";

const slidesData = [
  {
    image: "https://img.freepik.com/free-photo/man-jump-through-gap-hill-man-jumping-cliff-blue-sky-business-concept-idea_1323-185.jpg?w=740",
    title: "Building Reputations, Amplifying Brands",
    description: "NK Communications PR specializes in media relations, corporate communications, and digital PR to elevate your brand's presence.",
    // link: "/contact",
    buttonText: "Get in Touch",
    interval: 1000,
  },
  {
    image: "https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?t=st=1739682714~exp=1739686314~hmac=47c561ad86df65c9d17f73b22668009976edb725d99c08ca2359e4aa60ac94c1&w=740",
    title: "Expert PR & Media Strategies",
    description: "Tailored solutions to ensure your brand gets the right exposure.",
    // link: "/services",
    buttonText: "Explore Services",
    interval: 2000,
  },
  {
    image: "https://img.freepik.com/free-vector/vector-live-report-concept-live-news-hands-journalists-with-microphones-tape-recorders_1284-42127.jpg?t=st=1739682944~exp=1739686544~hmac=0541bf780b838a9cc4f16922a28dc5c8eaeb0f3baaa479035931c2c53a728d36&w=740",
    title: "Grow Your Brand with Us",
    description: "From press releases to digital campaigns, we craft compelling stories.",
    // link: "/about",
    buttonText: "Learn More",
    interval: 3000,
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
        {/* Carousel Indicators */}
        {/* <div className="carousel-indicators">
          {slidesData.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div> */}

        {/* Carousel Items */}
        <div className="carousel-inner">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval={slide.interval || 1000}
            >
              <img src={slide.image} className="w-100 img-fluid" alt={`Slide ${index + 1}`} />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="text-white">{slide.title}</h1>
                <p className="text-white">{slide.description}</p>
                {/* <a href={slide.link} className="btn btn-warning btn-lg mt-3">
                  {slide.buttonText}
                </a> */}
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
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};



