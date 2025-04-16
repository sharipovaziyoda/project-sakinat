import React from 'react';
import { pdfBooks } from './dataPdff';
import { usePdf } from './PdfContext';

function Pdf() {
  const { toggleFavorite, toggleRead, favorites, readList } = usePdf();

  const handlePdfClick = (book) => {
    if (!book.pdf || book.pdf === "Hozirda pdf kitob mavjud emas") {
      alert(`"PDF-ni ochish" tugmasi mavjud emas: ${book.title} kitobining PDF versiyasi hozirda mavjud emas.`);
      return; // Agar pdf linki mavjud bo'lmasa, hech narsa qilishmasin
    }
    window.open(book.pdf, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-indigo-600">PDF Kitoblar</h2>
      <ul className="space-y-4">
        {pdfBooks.map((book) => (
          <li key={book.id} className="bg-white rounded shadow flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
            <img src={book.cover} alt={book.title} className="w-28 h-40 object-cover rounded" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600 text-sm">Muallif: {book.author}</p>
              {/* PDF-ni ochish tugmasini faqat kitob PDF-ga ega bo'lsa ko'rsatish */}
              <button
                onClick={() => handlePdfClick(book)}
                className="inline-block mt-2 text-blue-600 underline"
              >
                PDF-ni ochish
              </button>
              <div className="mt-2 space-x-3">
                <button onClick={() => toggleFavorite(book)}>
                  {favorites.find((b) => b.id === book.id) ? '💖' : '🤍'}
                </button>
                <button onClick={() => toggleRead(book)}>
                  {readList.find((b) => b.id === book.id) ? '✅' : '✔️'}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pdf;
