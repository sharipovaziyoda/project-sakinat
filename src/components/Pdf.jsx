import React from 'react'
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { pdfBooks } from "./dataPdff";

function Pdf() {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">PDF Kitoblar</h2>
      <ul className="space-y-2">
        {pdfBooks.map((book) => (
          <li key={book.id} className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600">Muallif: {book.author}</p>
            <a
              href={book.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              PDF-ni ochish
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pdf