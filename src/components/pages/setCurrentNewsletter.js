import React from 'react';

const CurrentNewsletter = ({ currentNewsletter }) => {
  if (!currentNewsletter) {
    return null; // Return null if there is no current newsletter
  }

  return (
    <div>
      <h1>Current Newsletter</h1>
      <h2>{currentNewsletter.title}</h2>
      <p>Date: {currentNewsletter.date}</p>
      <p>{currentNewsletter.content}</p>
      <img src={currentNewsletter.imageUrl} alt="Current Newsletter" />
    </div>
  );
};

export default CurrentNewsletter;
