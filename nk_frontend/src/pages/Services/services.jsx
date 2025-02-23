import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBullhorn, FaChalkboardTeacher, FaNewspaper, FaUsers, FaStar, FaHandshake, FaShieldAlt, FaGlobe, FaCalendarAlt } from "react-icons/fa";

const services = [
  { icon: <FaBullhorn />, title: "Product Launches", description: "Seamlessly executed campaigns to generate buzz and drive consumer interest." },
  { icon: <FaChalkboardTeacher />, title: "Workshops & Seminars", description: "Engaging events that connect thought leaders and industry experts." },
  { icon: <FaNewspaper />, title: "Press Conferences", description: "Strategically designed to make headlines and establish industry leadership." },
  { icon: <FaUsers />, title: "Roundtable Discussions", description: "Exclusive high-level conversations with decision-makers and influencers." },
  { icon: <FaStar />, title: "Celebrity Interactions", description: "Strengthening brand visibility through impactful associations." },
  { icon: <FaHandshake />, title: "MOUs & Partnerships", description: "Facilitating collaborations that drive growth and credibility." },
  { icon: <FaShieldAlt />, title: "Crisis Communication", description: "Expert guidance to protect and navigate your brand through sensitive situations." },
  { icon: <FaGlobe />, title: "Social Media & Branding", description: "Tailored campaigns that enhance engagement and market positioning." },
  { icon: <FaCalendarAlt />, title: "Event Management", description: "Flawless execution of corporate events, ensuring lasting impressions." }
];

export default function Services() {
  return (
    <div className="container py-5">
      <h2 className="text-center" style={{ color: "#003479" }}>Our Services</h2>
      <p className="text-center text-white">
        At Nk Communications, we craft powerful PR and communication strategies that amplify your brand’s presence and credibility.
      </p>

      <Row className="mt-4">
        {services.map((service, index) => (
          <Col md={4} className="mb-4" key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className="shadow"
                style={{
                  backgroundColor: index % 2 === 0 ? "#00c2cb" : "#003479",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "12px"
                }}
              >
                <Card.Body className="text-center">
                  <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                    {service.icon}
                  </div>
                  <Card.Title style={{ fontWeight: "bold" }}>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
