import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div style={{ backgroundColor: "#00c2cb", color: "#000000" }}>
      <Container className="py-5">
        <h2 className="text-center" style={{ color: "#003479", fontWeight: "bold" }}>About Us</h2>
        <p className="text-center" style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto" }}>
          NK Communications is a premier PR and communications firm, specializing in **strategic brand visibility, press coverage, event management, and celebrity interactions**.
          With a strong presence across India, we help businesses build credibility, amplify their voice, and leave a lasting impact.
        </p>

        <Card className="p-4 shadow-sm mt-4" style={{ border: "none", backgroundColor: "#003479", borderRadius: "10px" }}>
          <p style={{ color: "#ffffff", fontSize: "17px", textAlign: "center" }}>
            Whether it's launching a new product, handling crisis communication, or creating high-impact media strategies,  
            **we ensure your brand gets the recognition it truly deserves**. Our expertise lies in crafting powerful narratives  
            that position brands as industry leaders.
          </p>
        </Card>
      </Container>

      {/* Why Choose Us Section */}
      <Container className="py-5">
        <h2 className="text-center" style={{ color: "#003479", fontWeight: "bold" }}>Why Choose NK Communications?</h2>
        <Row className="mt-4">
          {[
            { title: "Strategic PR Solutions", text: "Custom PR strategies to position your brand effectively in the market." },
            { title: "Top-Tier Media Coverage", text: "Connections with leading publications to maximize brand visibility." },
            { title: "High-Impact Brand Campaigns", text: "From press conferences to influencer collaborations, we create impactful campaigns." },
          ].map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Card className="p-4 shadow-sm text-center" style={{ borderRadius: "10px", backgroundColor: "#ffffff", border: "2px solid #003479" }}>
                  <h4 style={{ color: "#003479", fontWeight: "bold" }}>{item.title}</h4>
                  <p style={{ color: "#000000" }}>{item.text}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Our Work Section */}
      <Container className="py-5">
        <h2 className="text-center" style={{ color: "#003479", fontWeight: "bold" }}>Our Work</h2>
        <Row className="mt-4">
          {[
            { title: "Media Relations", text: "Connecting brands with top-tier media outlets to maximize visibility." },
            { title: "Corporate PR", text: "Creating strong corporate narratives to enhance reputation." },
            { title: "Digital PR", text: "Leveraging social and digital platforms for impactful communication." },
          ].map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Card className="p-4 shadow-sm text-center" style={{ borderRadius: "10px", backgroundColor: "#ffffff", border: "2px solid #003479" }}>
                  <h4 style={{ color: "#003479", fontWeight: "bold" }}>{item.title}</h4>
                  <p style={{ color: "#000000" }}>{item.text}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
