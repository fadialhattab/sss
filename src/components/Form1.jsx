import React, { useState } from 'react';

const AddCardForm = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
    // You can perform additional validation here if needed

    // Create an object with the card data
    const newCard = {
      cardName,
      cardNumber,
      expirationDate
    };

    // Update the cards list with the new card
    setCards((prevCards) => [...prevCards, newCard]);

    // Optionally, you can clear the form fields after submission
    setCardName('');
    setCardNumber('');
    setExpirationDate('');
  };

  return (
    <div>
      <h2>Add Sarvices</h2>
      <form>
        <label htmlFor="cardName">Service Name:</label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />
        <label htmlFor="cardNumber">Service Number:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />

        <label htmlFor="expirationDate">Price</label>
        <input
          type="number"
          id="expirationDate"
          name="expirationDate"
          value={expirationDate}
          required
        />

        <button type="button" onClick={handleAddCard}>
          Add Card
        </button>
      </form>

      <div>
        <h2>Added Services</h2>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <p>service Name: {card.cardName}</p>
            <p>service Number: {card.cardNumber}</p>
            <p>Price {card.expirationDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddCardForm;
