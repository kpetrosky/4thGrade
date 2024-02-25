// ParentComponent.js
import React, { useState } from 'react';
import AddNewsletterForm from './AddNewsletterForm';
import Newsletters from './Newsletters';

const ParentComponent = () => {
  const [currentNewsletter, setCurrentNewsletter] = useState(null);
  const [previousNewsletters, setPreviousNewsletters] = useState([]);

  const handleAddNewsletter = (newNewsletter) => {
    setCurrentNewsletter(newNewsletter);
    setPreviousNewsletters(prev => [...prev, newNewsletter]);
  };

  return (
    <div>
      <h1>Newsletters</h1>
      <AddNewsletterForm onAddNewsletter={handleAddNewsletter} />
      <Newsletters currentNewsletter={currentNewsletter} previousNewsletters={previousNewsletters} />
    </div>
  );
};

export default ParentComponent;
