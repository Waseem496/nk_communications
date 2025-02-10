
export default function HomePage() {
  return (
    <div className="bg-light min-vh-100">
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <h1 className="display-4">Building Reputations, Amplifying Brands</h1>
        <p className="mt-3 lead mx-auto w-75">NK Communications PR specializes in media relations, corporate communications, and digital PR to elevate your brand's presence.</p>
        <button className="btn btn-warning text-dark mt-4">Get in Touch</button>
      </header>
      
      {/* Services Section */}
      <section className="py-5 container text-center">
        <h2 className="text-primary mb-4">Our Core Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <h3 className="text-primary">Media Relations</h3>
              <p className="text-muted">We connect brands with top-tier media outlets to maximize visibility.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <h3 className="text-primary">Corporate PR</h3>
              <p className="text-muted">We craft compelling narratives to strengthen corporate reputation.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <h3 className="text-primary">Digital PR</h3>
              <p className="text-muted">Our strategies leverage emerging media to drive impactful engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="bg-primary text-white text-center py-4">
        <h2 className="h4">Let’s Elevate Your Brand!</h2>
        <p>Contact us today to create a PR strategy that works for you.</p>
        <button className="btn btn-warning text-dark">Contact Us</button>
      </footer>
    </div>
  );
}