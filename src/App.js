import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Listings from './components/Listing';
import Details from './components/Details';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'listings':
        return <Listings />;
      case 'details':
        return <Details />;
      case 'booking':
        return <BookingForm />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
