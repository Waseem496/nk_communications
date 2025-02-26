import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./about.css";
import strategicPR from "../../assets/strategicPR.png";
import brandawareness from "../../assets/brandawareness.png";
import mediacoverage from "../../assets/mediacoverage.png";

import digitalPR from "../../assets/digitalPR.png";
import corporatePR from "../../assets/corporatePR.png";

import mediarelation from "../../assets/mediarelation.png";

const AboutUs = () => {
  return (
    <div className="about-section">
      {/* About Us Section */}
      <Container fluid className="py-5 bg-dark-blue">
        <Container>
          <h2 className="about-title text-center text-sky-blue">About Us</h2>
          <p className="about-text text-center text-white">
            <strong>NK Communications</strong> is a premier PR and
            communications firm with <strong>19 years of experience</strong>,
            specializing in{" "}
            <strong>
              strategic brand visibility, press coverage, event management, and
              celebrity interactions
            </strong>
            . We have a strong presence across India, helping businesses build
            credibility, amplify their voice, and leave a lasting impact.
          </p>
        </Container>
      </Container>

      {/* Why Choose Us Section */}
      <Container className="py-5 mt-2 bg-dark-blue">
        <h2 className="about-title text-center text-dark-blue">
          Why Choose NK Communications?
        </h2>
        {[
          {
            title: "Strategic PR Solutions",
            text: "Custom PR strategies to position your brand effectively in the market.",
            image: strategicPR,
          },
          {
            title: "Top-Tier Media Coverage",
            text: "Connections with leading publications to maximize brand visibility.",
            image: mediacoverage,
          },
          {
            title: "High-Impact Brand Campaigns",
            text: "From press conferences to influencer collaborations, we create impactful campaigns.",
            image: brandawareness,
          },
        ].map((item, index) => (
          <Row className="align-items-center my-4" key={index}>
            <Col
              md={6}
              className={index % 2 === 0 ? "order-md-1" : "order-md-2"}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="feature-image"
                />
              </motion.div>
            </Col>
            <Col
              md={6}
              className={index % 2 === 0 ? "order-md-2" : "order-md-1"}
            >
              <Card className="feature-card text-white p-4">
                <h4 className="text-white">{item.title}</h4>
                <p>{item.text}</p>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>

      {/* Our Work Section */}
      <Container className="py-5 mt-3 bg-dark-blue">
        <h2 className="about-title text-center text-sky-blue">Our Work</h2>
        {[
          {
            title: "Media Relations",
            text: "Connecting brands with top-tier media outlets to maximize visibility.",
            image: mediarelation,
          },
          {
            title: "Corporate PR",
            text: "Creating strong corporate narratives to enhance reputation.",
            image: corporatePR,
          },
          {
            title: "Digital PR",
            text: "Leveraging social and digital platforms for impactful communication.",
            image: digitalPR,
          },
        ].map((item, index) => (
          <Row className="align-items-center my-4" key={index}>
            <Col
              md={6}
              className={index % 2 === 0 ? "order-md-1" : "order-md-2"}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="feature-image"
                />
              </motion.div>
            </Col>
            <Col
              md={6}
              className={index % 2 === 0 ? "order-md-2" : "order-md-1"}
            >
              <Card className="feature-card text-white p-4">
                <h4 className="text-white">{item.title}</h4>
                <p>{item.text}</p>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default AboutUs;
