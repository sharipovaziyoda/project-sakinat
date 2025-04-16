import React, { createContext, useContext, useState, useEffect } from 'react';

const PdfContext = createContext();

export const PdfProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [readList, setReadList] = useState(() => {
    const saved = localStorage.getItem('readList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('readList', JSON.stringify(readList));
  }, [favorites, readList]);

  const toggleFavorite = (book) => {
    const isFavorite = favorites.find((item) => item.id === book.id);
    let updatedFavorites = isFavorite
      ? favorites.filter((item) => item.id !== book.id)
      : [...favorites, book];
    setFavorites(updatedFavorites);
  };

  const toggleRead = (book) => {
    const isRead = readList.find((item) => item.id === book.id);
    let updatedReadList = isRead
      ? readList.filter((item) => item.id !== book.id)
      : [...readList, book];
    setReadList(updatedReadList);
  };

  return (
    <PdfContext.Provider value={{ favorites, readList, toggleFavorite, toggleRead }}>
      {children}
    </PdfContext.Provider>
  );
};

export const usePdf = () => useContext(PdfContext);
