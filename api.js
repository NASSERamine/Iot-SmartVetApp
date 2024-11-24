import axios from "axios";

// Base URL de votre backend
const BASE_URL = "http://localhost:5000/api"; // Remplacez localhost par l'IP de votre machine sur réseau local si vous testez sur un appareil réel.

export const api = axios.create({
  baseURL: BASE_URL,
});

// Fonction pour synchroniser les données
export const syncData = async () => {
  try {
    const response = await api.get("/sync");
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la synchronisation des données :",
      error.message
    );
    throw error;
  }
};

// Fonction pour récupérer la température
export const fetchTemperature = async () => {
  try {
    const response = await api.get("/temperature");
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de la température :",
      error.message
    );
    throw error;
  }
};

// Fonction pour récupérer les mouvements
export const fetchMovement = async () => {
  try {
    const response = await api.get("/movement");
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des mouvements :",
      error.message
    );
    throw error;
  }
};

// Fonction pour récupérer les pulsations cardiaques
export const fetchPulse = async () => {
  try {
    const response = await api.get("/pulse");
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des pulsations :",
      error.message
    );
    throw error;
  }
};
