import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const clients = [
  {
    category: "Healthcare",
    brands: [
      { name: "Kamineni Hospitals", logo: "/logos/kamineni.png" },
      { name: "Pace Hospitals", logo: "/logos/pace.png" },
      { name: "Lotus Hospitals", logo: "/logos/lotus.png" },
    ],
  },
  {
    category: "Retail & Lifestyle",
    brands: [
      { name: "GMR Groups", logo: "/logos/gmr.png" },
      { name: "GRT Jewelers", logo: "/logos/grt.png" },
      { name: "White & Gold", logo: "/logos/whitegold.png" },
      { name: "Spencer’s Hyper Market", logo: "/logos/spencers.png" },
      { name: "Future Group", logo: "/logos/futuregroup.png" },
    ],
  },
  {
    category: "Education",
    brands: [{ name: "Meridian School", logo: "/logos/meridian.png" }],
  },
  {
    category: "Corporate & Business",
    brands: [{ name: "Butta Groups", logo: "/logos/butta.png" }],
  },
  {
    category: "Automobile",
    brands: [{ name: "Tejaswini Motors", logo: "/logos/tejaswini.png" }],
  },
  {
    category: "Sports & Leisure",
    brands: [{ name: "Hyderabad Golf Club", logo: "/logos/hydgolf.png" }],
  },
];

export default function Clients() {
  return (
    <Container className="py-5">
      <h2 className="text-center" style={{ color: "#003479" }}>Our Esteemed Clients</h2>
      <p className="text-center text-muted">
        Over the years, Nk Communications has partnered with leading brands across various industries, delivering exceptional PR and communication solutions.
      </p>

      {clients.map((category, index) => (
        <div key={index} className="mt-5">
          <h4 style={{ color: "#00c2cb" }}>{category.category}</h4>
          <Row>
            {category.brands.map((brand, i) => (
              <Col key={i} md={3} sm={6} xs={12} className="mb-4">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <Card className="shadow text-center p-3" style={{ border: "none", borderRadius: "10px" }}>
                    <Card.Img variant="top" src={brand.logo} alt={brand.name} style={{ height: "80px", objectFit: "contain" }} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: "1rem", color: "#000" }}>{brand.name}</Card.Title>
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
