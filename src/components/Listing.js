import React from 'react';
import '../styles/Listing.css'; // CSS for Listings

const Listings = () => {
  return (
    <div className="listings-container">
      {/* Homestays Section */}
      <section className="homestays-listing">
        <h2>Homestays Listing</h2>
        <div className="homestay-cards">
          <div className="card">
            <img src="/assets/homestay1.jpg" alt="Homestay 1" />
            <h3>Peaceful Retreat</h3>
            <p>Experience tranquility and comfort.</p>
            <button className="view-details">View Details</button>
          </div>
          <div className="card">
            <img src="/assets/homestay2.jpg" alt="Homestay 2" />
            <h3>Jungle Stay</h3>
            <p>Stay close to nature in a lush green environment.</p>
            <button className="view-details">View Details</button>
          </div>
        </div>
      </section>

      {/* Activities Section (Optional) */}
      <section className="activities-listing">
        <h2>Activities Listing</h2>
        <div className="activity-cards">
          <div className="card">
            <img src="/assets/activity1.jpg" alt="Activity 1" />
            <h3>Tribal Dance</h3>
            <p>Experience the rich cultural heritage of Dantewada.</p>
            <button className="view-details">View Details</button>
          </div>
          <div className="card">
            <img src="/assets/activity2.jpg" alt="Activity 2" />
            <h3>Temple Tour</h3>
            <p>Explore ancient temples with guided tours.</p>
            <button className="view-details">View Details</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listings;
