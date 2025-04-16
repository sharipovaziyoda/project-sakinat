import React from 'react';
import { usePdf } from './PdfContext';

const ReadBooks = () => {
  const { readList } = usePdf(); // Context'dan readList ni olish

  return (
    <div className="p-4 space-y-10">
      <h2 className="text-xl font-bold mb-4 text-indigo-600">📘 O‘qilgan Kitoblar</h2>
      {readList.length === 0 ? (
        <p>Hozircha o‘qilgan kitoblar yo‘q.</p>
      ) : (
        <ul className="space-y-4">
          {readList.map((book) => (
            <li key={book.id} className="bg-white p-4 rounded shadow flex gap-4">
              <img
                src={book.cover || '/path/to/default-image.jpg'} // Default rasm
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
  );
};

export default ReadBooks;

