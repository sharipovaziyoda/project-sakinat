import React from 'react';
import { usePdf } from './PdfContext';

const Favorites = () => {
  const { favorites } = usePdf();

  // Sevimlilar holat tekshiruvini amalga oshiramiz
  if (!Array.isArray(favorites)) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <div className="p-4 space-y-10">
      {/* PDF KITOBLAR */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-indigo-600">📘 Sevimli PDF va Audio Kitoblar</h2>
        {favorites.length === 0 ? (
          <p>Sevimlilaringiz bo'sh.</p>
        ) : (
          <ul className="space-y-4">
            {favorites.map((book) => (
              <li key={book.id} className="bg-white p-4 rounded shadow flex gap-4">
                <img
                  src={book.cover || '/path/to/default-image.jpg'}
                  alt={book.title}
                  className="w-28 h-40 rounded object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-600">Muallif: {book.author}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Favorites;


