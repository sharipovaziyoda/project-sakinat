import React from 'react';
import { usePdf } from './PdfContext';

const audioBooks = [
  {
    id: 'a1',
    title: 'Sehrli Dunyo',
    author: 'Ziyoda A.',
    audioUrl: 'https://example.com/audio/sehrli-dunyo.mp3',
  },
  {
    id: 'a2',
    title: 'Yulduzlar Ostida',
    author: 'Alisher Navoiy',
    audioUrl: 'https://example.com/audio/yulduzlar.mp3',
  },
];

const Audio = () => {
  const { favorites, toggleFavorite } = usePdf();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-indigo-600">🎧 Audio Kitoblar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {audioBooks.map((book) => (
          <div key={book.id} className="border p-4 rounded shadow relative">
            <button
              onClick={() => toggleFavorite(book)}
              className="absolute top-2 right-2 text-xl"
            >
              {favorites.find((b) => b.id === book.id) ? '💖' : '🤍'}
            </button>
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600">Muallif: {book.author}</p>
            <audio controls src={book.audioUrl} className="w-full mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Audio;
