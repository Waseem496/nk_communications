import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
    return (
        <>
      <div className="container py-5">
        <h2 className="text-primary text-center">About Us</h2>
        <p className="text-muted text-center">NK Communications PR is a fast-growing public relations agency specializing in media relations, corporate communications, and digital PR.</p>
        <div className="card p-4 shadow-sm">
          <p>Our deep industry knowledge and strong media connections help brands establish a solid reputation. We work with clients of all sizes, from startups to global corporations.</p>
        </div>
      </div>
      <div className="container py-5">
      <h2 className="text-primary text-center">Our Work</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h4 className="text-primary">Media Relations</h4>
            <p>Connecting brands with top-tier media outlets to maximize visibility.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h4 className="text-primary">Corporate PR</h4>
            <p>Creating strong corporate narratives to enhance reputation.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h4 className="text-primary">Digital PR</h4>
            <p>Leveraging social and digital platforms for impactful communication.</p>
          </div>
        </div>
      </div>
    </div>
      </>
    );
  }