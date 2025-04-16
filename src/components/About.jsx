import React from 'react';

function About() {
  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
        Biz haqimizda
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed text-center mb-10">
        SAKINAT — bu zamonaviy kitobxonlar uchun yaratilgan raqamli kutubxona. Biz foydalanuvchilarga PDF va audio formatdagi eng yaxshi kitoblarni topish, ularni saqlash, sevish va baham ko‘rish imkoniyatini taqdim etamiz.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">📚 PDF Kitoblar</h2>
          <p className="text-gray-600">Turli janrdagi yuzlab PDF kitoblar to‘plami. Har bir kitobni o‘qish yoki yuklab olish mumkin.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">🎧 Audio Kitoblar</h2>
          <p className="text-gray-600">Yo‘lda yoki dam olishda tinglash uchun ideal audio kitoblar. Barchasi qulay pleyerda joylashgan.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">💖 Sevimlilar</h2>
          <p className="text-gray-600">Sevimli kitoblaringizni saqlang va keyinroq tezda toping.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">📌 O‘qilganlar ro‘yxati</h2>
          <p className="text-gray-600">O‘qib bo‘lgan kitoblaringizni belgilang va tarixni yuriting.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">Ko‘p so‘raladigan savollar</h2>
      <div className="space-y-4">
        <details className="bg-gray-50 p-4 rounded shadow cursor-pointer">
          <summary className="font-semibold text-indigo-600">📥 Kitoblarni qanday yuklab olaman?</summary>
          <p className="mt-2 text-gray-600">PDF kitoblarni sahifasidan bevosita brauzeringizga yuklab olishingiz mumkin.</p>
        </details>
        <details className="bg-gray-50 p-4 rounded shadow cursor-pointer">
          <summary className="font-semibold text-indigo-600">💬 Audio kitoblar doim ishlaydimi?</summary>
          <p className="mt-2 text-gray-600">Ha, audio kitoblar brauzerda to‘liq ishlaydi. Faqat YouTube havolalari o‘rniga MP3 formatdagi fayllar tavsiya qilinadi.</p>
        </details>
        <details className="bg-gray-50 p-4 rounded shadow cursor-pointer">
          <summary className="font-semibold text-indigo-600">❤️ Sevimlilar ro‘yxati o‘chib ketmaydimi?</summary>
          <p className="mt-2 text-gray-600">Brauzeringizda saqlanadi, lekin yaxshiroq tajriba uchun tizimga kirish funksiyasi yaqin orada qo‘shiladi.</p>
        </details>
      </div>
    </div>
  );
}

export default About;
