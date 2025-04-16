import React from 'react';
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* 1: Logo & About */}
        <div>
          <h2 className="text-xl font-semibold mb-2">📚 Sakinat</h2>
          <p className="text-gray-400">
            “Sakinat” sayti orqali siz PDF va audio kitoblardan bemalol foydalanishingiz,
            o‘qiganlaringizni saqlab borishingiz va sevimli kitoblaringizni belgilashingiz mumkin.
          </p>
        </div>

        {/* 2: Pages */}
        <div>
          <h3 className="font-semibold mb-2">📂 Sahifalar</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="/" className="hover:text-white">Uy</a></li>
            <li><a href="/pdf-books" className="hover:text-white">PDF Kitoblar</a></li>
            <li><a href="/audio-books" className="hover:text-white">Audio Kitoblar</a></li>
            <li><a href="/favorites" className="hover:text-white">Sevimlilar</a></li>
          </ul>
        </div>

        {/* 3: FAQ */}
        <div>
          <h3 className="font-semibold mb-2">❓ Ko‘p so‘raladigan savollar</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Kitoblarni qanday saqlayman?</li>
            <li>Audio eshitish uchun ro‘yxatdan o‘tish kerakmi?</li>
            <li>Kitoblar offline ishlaydimi?</li>
          </ul>
        </div>

        {/* 4: Contact + Socials */}
        <div>
          <h3 className="font-semibold mb-2">📞 Bog‘lanish</h3>
          <p className="flex items-center gap-2 text-gray-400"><FaPhone /> +998 95 050 35 30</p>
          <p className="flex items-center gap-2 text-gray-400"><FaEnvelope /> info@sakinat.uz</p>

          <div className="flex gap-4 mt-4">
            <a href="https://t.me/SakinatPdfAudioKitoblar" className="hover:text-blue-400"><FaTelegramPlane /></a>
            <a href="https://facebook.com" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://instagram.com" className="hover:text-pink-500"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8 text-xs">
        © {new Date().getFullYear()} Sakinat. Barcha huquqlar himoyalangan.
      </p>
    </footer>
  );
};

export default Footer;
