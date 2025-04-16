import { useState } from "react";
import Carousel from './Carousel'; // Carousel komponentini import qilish
import data from "./data";
import BookCard from "./BookCard";
import BookDetail from "./BookDetail";
import About from "./About";


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
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse mb-10 text-center">
         Yangi Kitoblar
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-00 font-medium tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-fadeIn text-center">
  Eng yangi kitoblar bilan tanishing!
</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <BookCard key={index} item={item} onClick={setSelectedItem} />
        ))}
      </div>

      {selectedItem && (
        <BookDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
    <div>
      <About/>
    </div>
    </div>
  );
};

export default Home;
