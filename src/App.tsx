import React from 'react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import RestaurantImage from './components/RestaurantImage';
import Footer from './components/Footer';
import './App.css';

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
            <RestaurantImage />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
