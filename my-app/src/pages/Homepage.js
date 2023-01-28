import React, { useState, useEffect } from "react";
import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const HomePage = () => {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    const fetchTherapists = async () => {
      const therapistsData = await firebase
        .database()
        .ref("/therapists")
        .once("value");
      setTherapists(therapistsData.val());
    };
    fetchTherapists();
  }, []);

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