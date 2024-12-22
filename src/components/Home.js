import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner">
        <img src="/assets/banner.jpg" alt="Dantewada Landscape" />
        {/* <h1>Welcome to Dantewada</h1> */}
        {/* <p>Discover the beauty of landscapes and vibrant culture.</p> */}
      </div>

      {/* Top Homestays Section */}
      <section className="top-homestays">
        <h2>Top Homestays</h2>
        <div className="homestay-cards">
          <div className="card">
            <img src="/assets/homestay1.jpg" alt="Homestay 1" />
            <h3>Peaceful Retreat</h3>
            <p>Experience tranquility and comfort.</p>
          </div>
          <div className="card">
            <img src="/assets/homestay1.jpg" alt="Homestay 2" />
            <h3>Jungle Stay</h3>
            <p>Stay close to nature.</p>
          </div>
        </div>
      </section>

      {/* Featured Activities Section */}
      <section className="featured-activities">
        <h2>Featured Activities</h2>
        <div className="activity-cards">
          <div className="card">
            <img src="/assets/activity1.jpg" alt="Activity 1" />
            <h3>Tribal Dance</h3>
            <p>Enjoy cultural performances by local artists.</p>
          </div>
          <div className="card">
            <img src="/assets/activity1.jpg" alt="Activity 2" />
            <h3>Temple Tour</h3>
            <p>Explore the ancient temples of Dantewada.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
