import React, { useState, useEffect } from 'react';
import "../App.css"

const AddCardForm = () => {
  const [cardName, setCardName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // New state for the image URL
  const [cards, setCards] = useState([]);

  // Load cards from local storage when the component mounts
  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
    setCards(storedCards);
  }, []);

  const handleAddCard = () => {
    // Create an object with the card data, including the image URL
    const newCard = {
      cardName,
      
      expirationDate,
      imageUrl
    };
// Update the cards list with the new card
    setCards((prevCards) => [...prevCards, newCard]);

    // Store the updated cards list in local storage
    localStorage.setItem('cards', JSON.stringify([...cards, newCard]));

    // Optionally, you can clear the form fields after submission
    setCardName('');
    
    setExpirationDate('');
    setImageUrl('');
  };

  return (<>
    <div id='form33'>
     
      <form> 
        <h2 >Add Service</h2>
        <label htmlFor="cardName">Service Name:</label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />
        
        

        <label htmlFor="expirationDate">Price:</label>
        <input
          type="text"
          id="expirationDate"
          name="expirationDate"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          required
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button type="button" onClick={handleAddCard}>
          Add Service
        </button>
      </form> 
      </div>
      <h2>Added Services</h2>
      <div id='newservice'>
        
        {cards.map((card, index) => (
          <div id='addservicecss' key={index} className="card">
            <p>Service Name: {card.cardName}</p>
            
<p>Price: {card.expirationDate}</p>
            {card.imageUrl && <img src={card.imageUrl} alt="Service" />}
          </div>
        ))}
      </div>
     

    </>
  );
};

export default AddCardForm;