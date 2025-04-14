const BookDetail = ({ item, onClose }) => {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-auto px-8 py-10">
        <button
          onClick={onClose}
          className="fixed top-4 right-4 text-2xl text-gray-700 hover:text-red-500"
        >
          ✕
        </button>
  
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
          <img
            src={item.image}
            alt={item.title}
            className="w-full lg:w-1/2 rounded-xl shadow-xl object-cover"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
            <p className="text-gray-700 mb-2 font-medium">
              Muallif: {item.author}
            </p>
            <p className="text-gray-700 mb-2">Nashr etilgan: {item.published}</p>
            <p className="text-gray-700 mt-4">{item.description}</p>
  
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href={item.pdf}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                📘 PDF-ni ochish
              </a>
              <a
                href={item.audio}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                🎧 Audiokitobni tinglash
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BookDetail;
  