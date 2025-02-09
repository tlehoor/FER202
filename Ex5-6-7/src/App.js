import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';




function App() {
  return (
    <div>
      <h3 className="bg-danger text-white text-left">1/</h3>
      <div className="container">
        <h1 className="bg-light text-center p-4">Let's test the grid!</h1>
        <h2 className="text-center">Created by ABC!</h2>

        <div className="row">
          <div className="col bg-secondary-subtle border border-black p-3">First col</div>
          <div className="col bg-secondary-subtle border border-black p-3">Second col</div>
        </div>

        <div className="row">
          <div className="col bg-secondary-subtle border border-black p-3">col</div>
          <div className="col bg-secondary-subtle border border-black p-3">col</div>
          <div className="col bg-secondary-subtle border border-black p-3">col</div>
        </div>

        <div className="row">
          <div className="col bg-secondary-subtle border border-black p-3">col</div>
          <div className="col bg-secondary-subtle border border-black p-3">col</div>
          <div className="col bg-secondary-subtle border border-black p-3">col</div>
          <div className="col bg-secondary-subtle border border-black p-3">col</div>
        </div>

        <footer className="text-center mt-4" style={{ backgroundColor: '#CDB7B5' }}>
          <h2>Created by ABC!</h2>
        </footer>
      </div>


      <h3 className="bg-danger text-white text-left">2/</h3>

      <div className="row justify-content-center mt-4">
        <h1 className="text-2xl bg-body-secondary text-center font-bold mb-4">My First Bootstrap Page</h1>
        <div className="col-4 text-center">
          <div className="p-3">
            <img src="pngegg.png" alt="Image 1" style={{ width: 300, height: 300 }} />
          </div>
        </div>
        <div className="col-4 text-center">
          <div className="p-3">
            <img src="CSS3_logo.svg.png" alt="Image 2" style={{ width: 300, height: 300 }} />
          </div>
        </div>
        <div className="col-4 text-center">
          <div className="p-3">
            <img src="Bootstrap.png" alt="Image 3" style={{ width: 400, height: 400 }} />
          </div>
        </div>
      </div>


      <h3 className="bg-danger text-white text-left">3/</h3>

      <div className="container mt-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <h2>Let's test the grid!</h2>
        </div>

        <nav className="mb-3">
          <a href="#" className="text-primary me-3">Active</a>
          <a href="#" className="text-primary me-3">Link</a>
          <a href="#" className="text-primary me-3">Link</a>
          <span className="text-muted">Disabled</span>
        </nav>

        <div className="row">
          <div className="col-md-6 bg-light border p-3">First col</div>
          <div className="col-md-6 bg-light border p-3">Second col</div>
          <div className="col-md-4 bg-light border p-3">col</div>
          <div className="col-md-4 bg-light border p-3">col</div>
          <div className="col-md-4 bg-light border p-3">col</div>
          <div className="col-md-3 bg-light border p-3">col</div>
          <div className="col-md-3 bg-light border p-3">col</div>
          <div className="col-md-3 bg-light border p-3">col</div>
          <div className="col-md-3 bg-light border p-3">col</div>
        </div>

        <footer className="mt-4 p-3 bg-light text-center border">
          <h4 className="fw-bold">Created by ABC!</h4>
        </footer>
      </div>


      <h3 className="bg-danger text-white text-left">4/</h3>

      <div className="text-center">
        <header className="py-3" style={{ backgroundColor: "orange" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
            alt="FPT University Logo"
            className="img-fluid"
            style={{ maxHeight: "100px" }}
          />
        </header>

        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "orange" }}>
          <div className="container">
            <div className="navbar-nav mx-auto">
              <a className="nav-link text-white" href="#home">
                Home
              </a>
              <a className="nav-link text-white" href="#about">
                About
              </a>
              <a className="nav-link text-white" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </nav>

        <main className="container my-5">
          <section id="about" className="py-3">
            <h2>About</h2>
            <p>This is the about section of the website.</p>
          </section>

          <section id="contact" className="py-3">
            <h2>Contact</h2>
            <p>
              For any inquiries, please contact us at
              <a href="mailto:example@example.com"> example@example.com</a>.
            </p>
          </section>
        </main>

        <footer className=" py-3" style={{ backgroundColor: "orange" }}>
          <p className="mb-0">&copy; 2023 Website. All rights reserved.</p>
        </footer>
      </div>
      
    </div>
  );
}

export default App;