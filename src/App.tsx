import React from 'react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import './App.css';
import restaurantImage from './assets/image 1.png';
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content" role="main">
        <div className="content-container">
          <section className="booking-section" aria-labelledby="booking-title">
            <BookingForm />
          </section>
          <section className="image-section" aria-label="Restaurant interior">
          <img src={restaurantImage} alt="Restaurant interior" />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
