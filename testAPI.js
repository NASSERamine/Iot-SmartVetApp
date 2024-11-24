const axios = require("axios");

// Adresse de votre backend
const BASE_URL = "http://localhost:5000/api"; // Remplacez localhost par votre IP locale si vous testez sur un appareil réel

// Fonctions pour consommer les API
const syncData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sync`);
    console.log("Synchronisation réussie :", response.data);
  } catch (error) {
    console.error("Erreur de synchronisation :", error.message);
  }
};

const fetchTemperature = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/temperature`);
    console.log("Température :", response.data);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de la température :",
      error.message
    );
  }
};

const fetchMovement = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movement`);
    console.log("Mouvement :", response.data);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des mouvements :",
      error.message
    );
  }
};

const fetchPulse = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pulse`);
    console.log("Pulsations :", response.data);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des pulsations :",
      error.message
    );
  }
};

// Appel des fonctions pour tester
(async () => {
  console.log("Lancement des tests d'API...\n");

  await syncData(); // Synchronisation des données
  await fetchTemperature(); // Récupération de la température
  await fetchMovement(); // Récupération des mouvements
  await fetchPulse(); // Récupération des pulsations

  console.log("\nTests terminés.");
})();
