const BookCard = ({ item, onClick }) => {
    return (
      <div
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer overflow-hidden"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 text-left">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-4">{item.author}</p>
          <p className="text-gray-700 mb-2">Janr: {item.genre}</p>
          <button
            onClick={() => onClick(item)}
            className="mt-auto px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Ko‘rish
          </button>
        </div>
      </div>
    );
  };
  
  export default BookCard;
  