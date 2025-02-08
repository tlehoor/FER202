import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div className="App" style={{ fontFamily: 'Times New Roman, Times, serif', backgroundColor: '#343434' }}>
      <header className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h1 className="h3 me-4" style={{ marginBottom: '0' }}>Pizza House</h1>
            <nav>
              <ul className="nav">
                <li className="nav-item"><a href="#" className="nav-link text-white">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white fw-lighter"style={{ opacity:0.7 }}>About Us</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white fw-lighter"style={{ opacity:0.7 }}>Contact</a></li>
              </ul>
            </nav>
          </div>
          <form className="d-flex">
            <input className="form-control" type="search" placeholder="Search" />
            <button className="btn btn-danger" type="submit"><i class="bi bi-search"></i></button>
          </form>
        </div>
      </header>

      <section className="hero text-white text-center" style={{ paddingTop: '0', paddingBottom: '0' }}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></button>
          </div>
          <div className="carousel-inner">
            {['pizza1.jpg', 'pizza2.jpg', 'pizza3.jpg', 'pizza4.jpg', 'pizza5.jpg'].map((img, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={img} className="d-block w-100" alt="Pizza" />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
          <div className="carousel-caption d-none d-md-block" style={{ position: 'absolute',  left: '50%', transform: 'translateX(-50%)' }}>
            <h2 className="display-4">Neapolitan Pizza</h2>
            <p className="lead">If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
          </div>
        </div>
       
      </section>

      <section className="menu container py-5">
        <h1 className="text-left text-white mb-4">Our Menu</h1>
        <div className="row">
          {[
            { name: 'Margherita Pizza', price: '$40.00', discount: '$24.00', tag: 'SALE', img: 'menu1.jpg' },
            { name: 'Mushroom Pizza', price: '$25.00', img: 'menu2.jpg' },
            { name: 'Hawaiian Pizza', price: '$30.00', tag: 'NEW', img: 'menu3.jpg' },
            { name: 'Pesto Pizza', price: '$50.00', discount: '$16.00', tag: 'SALE', img: 'menu4.jpg' },
          ].map((item, index) => (
            <div key={index} className="col-md-3">
              <div className="card">
                {item.tag && <span className="badge bg-warning text-dark position-absolute p-2">{item.tag}</span>}
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.discount ? <><del>{item.price}</del> <span className="text-danger">{item.discount}</span></> : item.price}</p>
                  <button className="btn btn-dark w-100">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="booking container py-5">
        <h1 className="text-center text-white mb-4">Book Your Table</h1>
        <form>
          <div className="row">
            <div className="col-md-4 mb-3">
              <input type="text" className="form-control" placeholder="Your Name *" required />
            </div>
            <div className="col-md-4 mb-3">
              <input type="email" className="form-control" placeholder="Your Email *" required />
            </div>
            <div className="col-md-4 mb-3">
              <select className="form-control">
                <option>Select a Service</option>
                <option>Dine In</option>
                <option>Take Away</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Please write your comment"></textarea>
          </div>
          <button className="btn btn-warning">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
