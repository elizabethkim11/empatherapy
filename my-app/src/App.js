import React, { useState } from 'react';

const HomePage = () => {
  const [therapists, setTherapists] = useState([
    {
      id: 1,
      name: 'John Smith',
      qualifications: 'Licensed Clinical Psychologist',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Jane Doe',
      qualifications: 'Licensed Marriage and Family Therapist',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      qualifications: 'Licensed Professional Counselor',
      image: 'https://via.placeholder.com/150'
    },
  ]);

  return (
    <div>
      <h1>Welcome to the Therapist Finder</h1>
      <div>
        {therapists.map((therapist) => (
          <TherapistCard key={therapist.id} therapist={therapist} />
        ))}
      </div>
    </div>
  );
};

const TherapistCard = ({ therapist }) => {
  return (
    <div>
      <img src={therapist.image} alt={therapist.name} />
      <h2>{therapist.name}</h2>
      <p>{therapist.qualifications}</p>
    </div>
  );
};

export default HomePage;