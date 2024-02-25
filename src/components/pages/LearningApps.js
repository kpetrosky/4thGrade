import React from 'react';


const LearningApps = () => { // Rename the local variable
  // Define an array of learning apps with names and website URLs
  const learningApps = [
    { name: 'Starfall', category: 'Practice', url: 'https://www.starfall.com/h/' },
    { name: 'Khan Academy', category: 'Skills', url: 'https://www.khanacademy.org/' },
    { name: 'Education', category: 'Skills', url: 'https://www.education.com/?gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T8HmgLOlCY-9KP-llUhlCDPBSW_TZ3OOPw9wti2zRwjLAZk2TA1SlUaApc3EALw_wcB' },
    { name: 'Prodigy', category: 'Math practice', url: 'https://www.prodigygame.com/main-en/' },
    // Add more learning apps as needed
  ];

  return (
    <div>
      <h1>List of Learning Apps</h1>
      <ul>
        {learningApps.map((app, index) => (
          <li key={index}>
            <a href={app.url} target="_blank" rel="noopener noreferrer">{app.name}</a> - {app.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningApps; // Export the LearningApps component

