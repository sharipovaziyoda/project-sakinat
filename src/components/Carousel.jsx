import { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    "https://odam.uz/upload/media/entries/2018-05/15/1620-63-258b83d3c1430ee293fc777c0b1e4a83.jpg",
    "https://talimuchun.uz/wp-content/uploads/2024/09/kitob-rasmi.png",
    "https://uzbaza.uz/wp-content/uploads/2021/08/kitobga-dostman.jpg",
    "https://odam.uz/upload/media/entries/2018-05/15/1620-51-1929e77f3513a09cef05c4ca4f6e72da.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-screen object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text on Image */}
      <div className="absolute inset-0 flex justify-center items-center text-black text-3xl font-bold">
  <h1 className="text-center px-4 text-yellow-400 sm:text-black sm:text-4xl lg:text-5xl font-extrabold backdrop-blur-md shadow-lg">
    Eng Yaxshi Kitoblarni Keshf Et!
  </h1>
</div>


      {/* Navigation Buttons */}
      <button
  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-opacity-70 shadow-lg"
  onClick={prevImage}
>
  &#10094;
</button>
<button
  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-opacity-70 shadow-lg"
  onClick={nextImage}
>
  &#10095;
</button>

    </div>
  );
};

export default Carousel;

