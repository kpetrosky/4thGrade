import React from 'react';

const LearningAppList = () => {
  // Define an array of learning apps
  const learningApps = [
    { id: 1, name: 'Starfall', category: 'Practice', url: 'https://www.starfall.com/h/' },
    { id: 2, name: 'Education', category: 'Practice2', url: 'https://www.education.com/?gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T8HmgLOlCY-9KP-llUhlCDPBSW_TZ3OOPw9wti2zRwjLAZk2TA1SlUaApc3EALw_wcB' },
    { id: 3, name: 'Khan Academy', category: 'Skills', url: 'https://www.khanacademy.org/' },
    { id: 4, name: 'Prodigy', category: 'Math skills', url: 'https://www.prodigygame.com/main-en/' },
    // Add more learning apps as needed
  ];

  return (
    <div>
      <h1>List of Learning Apps</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {learningApps.map((app) => (
            <tr key={app.id}>
              <td><a href={app.url} target="_blank" rel="noopener noreferrer">{app.name}</a></td>
              <td>{app.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LearningAppList;
