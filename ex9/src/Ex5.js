import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ex5() {
  return (
    <div>
      <div className="text-center">
        <header className="py-3" style={{ backgroundColor: "orange" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
            alt="FPT University Logo"
            className="img-fluid"
            style={{ maxHeight: "100px" }}
          />
        </header>

        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "orange" }}>
          <div className="container">
            <div className="navbar-nav mx-auto">
              <a className="nav-link text-white" href="">
                Home
              </a>
              <a className="nav-link text-white" href="">
                About
              </a>
              <a className="nav-link text-white" href="">
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

        <footer className="py-3" style={{ backgroundColor: "orange" }}>
          <p>&copy; 2023 Website. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default ex5;
