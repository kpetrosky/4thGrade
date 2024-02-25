import React, { useState, useEffect } from 'react';

const NewsletterPage = () => {
  // State to manage current and previous newsletters
  const [currentNewsletter, setCurrentNewsletter] = useState(null);
  const [previousNewsletters, setPreviousNewsletters] = useState([]);

  // Fetch newsletters from your API
  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        // Fetch current newsletter
        const currentResponse = await fetch('your-current-newsletter-api-url');
        const currentData = await currentResponse.json();
        setCurrentNewsletter(currentData);

        // Fetch previous newsletters
        const previousResponse = await fetch('your-previous-newsletters-api-url');
        const previousData = await previousResponse.json();
        setPreviousNewsletters(previousData);
      } catch (error) {
        console.error('Error fetching newsletters:', error);
      }
    };

    fetchNewsletters();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h1>Previous Newsletter</h1>
      {previousNewsletters && (
        <div>
          <h2>{currentNewsletter.title}</h2>
          <p>Date: {currentNewsletter.date}</p>
          <p>{currentNewsletter.content}</p>
          <img src={currentNewsletter.imageUrl} alt="Current Newsletter" />
        </div>
      )}

      <h2>Previous Newsletters</h2>
      {previousNewsletters.map(newsletter => (
        <div key={newsletter.id}>
          <h3>{newsletter.title}</h3>
          <p>Date: {newsletter.date}</p>
          <p>{newsletter.content}</p>
          <img src={newsletter.imageUrl} alt="Previous Newsletter" />
        </div>
      ))}
    </div>
  );
};

export default NewsletterPage;
