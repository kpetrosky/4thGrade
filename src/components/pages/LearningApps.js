import React from 'react';
import LearningAppList from '../pages/LearningAppList';

const LearningAppList = () => {
  // Define an array of learning apps with names and website URLs
  const learningApps = [
    { name: 'Starfall', category: 'Practice', url: 'https://www.starfall.com/h/index-kindergarten.php/' },
    { name: 'Education', category: 'Programming and Development', url: 'https://www.education.com/?gad_source=1&gclid=Cj0KCQiAxOauBhCaARIsAEbUSQQLRrFAaTnlfmIfVG1PfSw5BD26Octj4Dee-g8kA5eU785_5puSOGsaAt9oEALw_wcB/' },
    { name: 'Khan Academy', category: 'Math and Science', url: 'https://www.khanacademy.org/' },
    { name: 'Skillshare', category: 'Art and Creativity', url: 'https://www.skillshare.com/' },
    { name: 'Khan Academy SAT Prep', category: 'Test Preparation', url: 'https://www.khanacademy.org/test-prep/sat' },
    { name: 'TED-Ed', category: 'Personal Development', url: 'https://ed.ted.com/' },
    // Add more learning apps as needed
  ];

  return (
    <div>
      <h1>List of Learning Apps</h1>
      <ul>
        {/* Map through the array of learning apps and render a list item for each */}
        {learningApps.map((app, index) => (
          <li key={index}>
            {/* Render a link with the app name and URL */}
            <a href={app.url} target="_blank" rel="noopener noreferrer">{app.name}</a> - {app.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningAppList;
