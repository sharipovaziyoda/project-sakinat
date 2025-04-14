import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = decodeURIComponent(searchParams.get("q")?.toLowerCase() || "").trim();

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) { // Faqat qidiruv so'zi bo'lsa, fetch qilish
        try {
          const [pdfRes, audioRes] = await Promise.all([
            fetch("http://localhost:3001/pdf-books"),
            fetch("http://localhost:3001/audio-books"),
          ]);

          const pdfBooks = await pdfRes.json();
          const audioBooks = await audioRes.json();

          const allBooks = [...pdfBooks, ...audioBooks];

          const filtered = allBooks.filter((book) =>
            book.title.toLowerCase().includes(searchTerm)  // qidiruvni filtrlash
          );

          setResults(filtered);
        } catch (error) {
          console.error("Xatolik:", error);
        }
      } else {
        setResults([]);  // Agar qidiruv so'zi bo'lmasa, natijalarni bo'shatish
      }
    };

    fetchData();
  }, [searchTerm]); // searchTerm o'zgarganda faqat qayta ishlaydi

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Qidiruv natijalari:</h2>
      {results.length > 0 ? (
        <ul className="space-y-2">
          {results.map((book) => (
            <li key={book.id} className="border p-4 rounded shadow">
              <span className="font-medium">{book.title}</span> —{" "}
              {book.type.toUpperCase()}
            </li>
          ))}
        </ul>
      ) : (
        <p>Hech narsa topilmadi.</p>
      )}
    </div>
  );
};

export default SearchPage;
