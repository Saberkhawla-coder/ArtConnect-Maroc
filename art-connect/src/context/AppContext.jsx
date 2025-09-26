// src/context/AppContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [artisans, setArtisans] = useState([]);
  const [categories, setCategories] = useState([]);
  const [evenements, setEvenements] = useState([]);
  const [oeuvres, setOeuvres] = useState([]);

  // 🔹 Récupérer artisans
  async function getArtisans() {
    const res = await axios.get("http://localhost:3000/artisans");
    setArtisans(res.data);
  }

  // 🔹 Récupérer catégories
  async function getCategories() {
    const res = await axios.get("http://localhost:3000/categories");
    setCategories(res.data);
  }

  // 🔹 Récupérer événements
  async function getEvenements() {
    const res = await axios.get("http://localhost:3000/evenements");
    setEvenements(res.data);
  }

  // 🔹 Récupérer oeuvres
  async function getOeuvres() {
    const res = await axios.get("http://localhost:3000/oeuvres");
    setOeuvres(res.data);
  }

  useEffect(() => {
    getArtisans();
    getCategories();
    getEvenements();
    getOeuvres();
  }, []);

  return (
    <AppContext.Provider
      value={{ artisans, categories, evenements, oeuvres }}
    >
      {children}
    </AppContext.Provider>
  );
}
