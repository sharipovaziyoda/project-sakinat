import React from 'react';

function Stores() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Store Icon"
        className="w-24 h-24 mb-4 opacity-70"
      />
      <h2 className="text-2xl font-bold text-indigo-600 mb-2">
        Hozircha do‘konlar mavjud emas
      </h2>
      <p className="text-gray-500 max-w-md">
        Biz yaqinda eng yaxshi offline va online kitob do‘konlari haqida ma’lumotlarni shu yerga joylaymiz. Iltimos, keyinroq yana kirib ko‘ring! 📚🕰️
      </p>
    </div>
  );
}

export default Stores;
