import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const LearningAppList = () => {
  // Define an array of learning apps
  const learningApps = [
    { id: 1, name: 'Starfall', category: 'Practice' },
    { id: 2, name: 'Codecademy', category: 'Programming and Development' },
    { id: 3, name: 'Khan Academy', category: 'Math and Science' },
    { id: 4, name: 'Skillshare', category: 'Art and Creativity' },
    { id: 5, name: 'Khan Academy SAT Prep', category: 'Test Preparation' },
    { id: 6, name: 'TED-Ed', category: 'Personal Development' },
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
              <td><Link to={`/LearningApps/${app.id}`}>{app.name}</Link></td>
              <td>{app.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LearningAppList;
