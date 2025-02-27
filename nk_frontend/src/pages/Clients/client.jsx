import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./client.css";
import kamineni from "../../assets/logos/kamineni.png";
import pace from "../../assets/logos/pace.jpeg";
import cipla from "../../assets/logos/cipla.png";
import gmr from "../../assets/logos/GMR.webp";
import grtjewellers from "../../assets/logos/grtjewellers.png";
import spencers from "../../assets/logos/spencers.jpeg";
import badruka from "../../assets/logos/badruka.webp";
import lotus from "../../assets/logos/lotus.jpeg";
import firstchoice from "../../assets/logos/firstchoice.png";
import barbequenation from "../../assets/logos/barbequenation.png";
import futuregroup from "../../assets/logos/futuregroup.png";
import meridian from "../../assets/logos/meridian.png";
import mahindrauniversity from "../../assets/logos/mahindrauniversity.png";
import mahindra from "../../assets/logos/mahindra.png";
import buttagroup from "../../assets/logos/buttagroup.jpg";
import iocl from "../../assets/logos/iocl.png";
import HGC from "../../assets/logos/HGC.png";
import witeandgold from "../../assets/logos/witeandgold.png";
import malaysiatourism from "../../assets/logos/malaysiatourism.png";
import IRCTC from "../../assets/logos/IRCTC.png";

const clients = [
  {
    category: "Healthcare",
    brands: [
      { name: "Kamineni Hospitals", logo: kamineni },
      { name: "Pace Hospitals", logo: pace },
      { name: "Lotus Hospitals", logo: lotus },
    ],
  },
  {
    category: "Retail & Lifestyle",
    brands: [
      { name: "GMR Groups", logo: gmr },
      { name: "GRT Jewelers", logo: grtjewellers },
      { name: "Cipla Hospitals", logo: cipla },
      { name: "Wite & Gold", logo: witeandgold },
      { name: "Spencer’s Hyper Market", logo: spencers },
      { name: "Future Group", logo: futuregroup },
      { name: "Barbeque Nation", logo: barbequenation },
      { name: "Indian Oil Corporation Limited", logo: iocl },
    ],
  },
  {
    category: "Education",
    brands: [
      { name: "Meridian School", logo: meridian },
      { name: "Mahindra Univeristy", logo: mahindrauniversity },
      { name: "Badruka", logo: badruka },
    ],
  },
  {
    category: "Corporate & Business",
    brands: [
      { name: "Butta Groups", logo: buttagroup },
      { name: "Mahindra", logo: mahindra },
      { name: "Malaysia Tourism", logo: malaysiatourism },
      { name: "IRCTC", logo: IRCTC },
    ],
  },
  {
    category: "Automobile",
    brands: [
      { name: "Tejaswini Motors", logo: "/logos/tejaswini.png" },
      { name: "First Choice", logo: firstchoice },
    ],
  },
  {
    category: "Sports & Leisure",
    brands: [{ name: "Hyderabad Golf Club", logo: HGC }],
  },
];

export default function Clients() {
  return (
    <Container className="py-5 client-container">
      <h2 className="text-center" style={{ color: "#003479" }}>
        Our Esteemed Clients
      </h2>
      <p className="text-center text-muted">
        Over the years, Nk Communications has partnered with leading brands
        across various industries, delivering exceptional PR and communication
        solutions.
      </p>

      {clients.map((category, index) => (
        <div key={index} className="mt-5">
          <h4 style={{ color: "#00c2cb" }}>{category.category}</h4>
          <Row>
            {category.brands.map((brand, i) => (
              <Col key={i} md={3} sm={6} xs={12} className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className="shadow text-center p-3"
                    style={{ border: "none", borderRadius: "10px" }}
                  >
                    <Card.Img
                      variant="top"
                      src={brand.logo}
                      alt={brand.name}
                      style={{ height: "80px", objectFit: "contain" }}
                    />
                    <Card.Body>
                      <Card.Title style={{ fontSize: "1rem", color: "#000" }}>
                        {brand.name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}
