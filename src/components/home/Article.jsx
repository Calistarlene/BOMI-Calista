import React from "react";

const blogPosts = [
  {
    id: 1,
    date: "Mar 16, 2020",
    category: "Lifestyle",
    title: "Langkah Awal Menuju Hidup Sehat: Kenali Risiko Kesehatan Anda Sekarang",
    description:
      "Mengetahui status kesehatan tubuh sejak dini adalah kunci untuk mencegah berbagai penyakit. Melalui pemeriksaan sederhana seperti BMI dan estimasi komposisi tubuh ...",
    image:
      "https://www.msiglife.co.id/public-file/webcorporate/webcorporate/article/bahasa/tips-menerapkan-gaya-hidup-sehat.jpeg",
  },
  {
    id: 2,
    date: "Mar 16, 2020",
    category: "Lifestyle",
    title: "Langkah Awal Menuju Hidup Sehat: Kenali Risiko Kesehatan Anda Sekarang",
    description:
      "Mengetahui status kesehatan tubuh sejak dini adalah kunci untuk mencegah berbagai penyakit. Melalui pemeriksaan sederhana seperti BMI dan estimasi komposisi tubuh ...",
    image:
      "https://www.msiglife.co.id/public-file/webcorporate/webcorporate/article/bahasa/tips-menerapkan-gaya-hidup-sehat.jpeg",
  },
  {
    id: 3,
    date: "Mar 16, 2020",
    category: "Lifestyle",
    title: "Langkah Awal Menuju Hidup Sehat: Kenali Risiko Kesehatan Anda Sekarang",
    description:
      "Mengetahui status kesehatan tubuh sejak dini adalah kunci untuk mencegah berbagai penyakit. Melalui pemeriksaan sederhana seperti BMI dan estimasi komposisi tubuh ...",
    image:
      "https://www.msiglife.co.id/public-file/webcorporate/webcorporate/article/bahasa/tips-menerapkan-gaya-hidup-sehat.jpeg",
  },
];

const handleViewAllClick = () => {
    // Navigate to sleep tips page
    window.location.href = '/articles';
  };

export default function BlogSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Explore our Article!</h2>
      <p className="text-center text-gray-600 mb-10">
        Tingkatkan pengetahuan Anda tentang kesehatan tubuh bersama
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                <span>{post.date}</span>
                <span className="bg-[#F0BB78] text-gray-700 rounded-full px-3 py-1 text-xs">
                  {post.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-6">{post.description}</p>
              <div>
                  <a href="#" rel="noopener noreferrer" className="font-semibold">
                    Read more on article
                  </a> 
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
      <button
        onClick={handleViewAllClick}
        className="px-6 py-2 mt-10   rounded-full font-medium border-2 transition-all duration-200 hover:bg-[#F0BB78] hover:text-white"
        style={{
            borderColor: '#F0BB78',
            color: '#626F47'
        }}
        >
        View All 
      </button>
      </div>
    </div>
  );
}
