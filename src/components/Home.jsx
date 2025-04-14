import { useState } from "react";
import Carousel from './Carousel'; // Carousel komponentini import qilish
import data from "./data";
import BookCard from "./BookCard";
import BookDetail from "./BookDetail";


const Home = () => {

    const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-center">
        <Carousel />
      </section>

      {/* Other Content */}
      <section className="p-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Yangi Kitoblar</h2>
      <p className="text-xl mb-10">Eng yaxshi kitoblar bilan tanishing!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <BookCard key={index} item={item} onClick={setSelectedItem} />
        ))}
      </div>

      {selectedItem && (
        <BookDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
    </div>
  );
};

export default Home;
