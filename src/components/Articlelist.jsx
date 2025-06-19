import React, { useState } from 'react';

const TipsHomepage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [visibleArticles, setVisibleArticles] = useState(6);

  // Sample article data - replace with your actual data
const articles = [
  // Healthy Lifestyle
  {
    id: 1,
    title: "Avoid Screens Before Bed",
    description: "Blue light from phones and computers can disrupt melatonin production. Avoid screens at least 1 hour before bedtime.",
    author: "Dr. Lina Hartono",
    image: "https://www.sleepmattersperth.com.au/wp-content/uploads/SEE-screens-before-bed.jpeg",
    link: "/article/1",
    category: "Healthy Lifestyle"
  },
  {
    id: 2,
    title: "Create a Sleep Routine",
    description: "Going to bed and waking up at the same time daily helps regulate your internal body clock for better sleep quality.",
    author: "Dr. Iqbal Ramadhan",
    image: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/03bca94a-90fc-4672-92fb-ceeee11cde3f/Bedtime+routine+for+adults3x2.jpg",
    link: "/article/2",
    category: "Healthy Lifestyle"
  },
  {
    id: 3,
    title: "Exercise Regularly",
    description: "Regular physical activity can help you fall asleep faster and enjoy deeper sleep.",
    author: "Dr. Surya Wijaya",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=400&h=300&fit=crop",
    link: "/article/3",
    category: "Healthy Lifestyle"
  },
  {
    id: 4,
    title: "Keep Your Bedroom Cool and Dark",
    description: "A comfortable sleep environment with low light and cool temperature promotes better rest.",
    author: "Dr. Bambang Darmawan",
    image: "https://www.nestbedding.com/cdn/shop/articles/dark_bedroom_at_night_10806ccc-8468-4fd1-928b-3158322b8a8e_2310x.jpg?v=1574245656",
    link: "/article/4",
    category: "Healthy Lifestyle"
  },
  {
    id: 5,
    title: "Set a Screen-Free Hour",
    description: "Having one hour without any electronic device helps relax your brain before sleep.",
    author: "Dr. Ayu Kartika",
    image: "https://images.unsplash.com/photo-1510626176961-4bfb7f9ada2d",
    link: "/article/5",
    category: "Healthy Lifestyle"
  },

  // Body Metrics & Analysis
  {
    id: 6,
    title: "Understanding Your BMI",
    description: "Learn what BMI is and how to interpret your number in relation to your overall health.",
    author: "Dr. Nanda Priyanka",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    link: "/article/6",
    category: "Body Metrics & Analysis"
  },
  {
    id: 7,
    title: "How to Measure Body Fat Accurately",
    description: "Explore the different methods of body fat measurement and their pros and cons.",
    author: "Dr. Yoga Saputra",
    image: "https://images.unsplash.com/photo-1617634667037-fd97fdb1f2c5",
    link: "/article/7",
    category: "Body Metrics & Analysis"
  },
  {
    id: 8,
    title: "What is Visceral Fat?",
    description: "Visceral fat surrounds organs and can increase health risks. Learn how to reduce it.",
    author: "Dr. Rini Suryani",
    image: "https://images.unsplash.com/photo-1617972335184-44e0e828c60c",
    link: "/article/8",
    category: "Body Metrics & Analysis"
  },
  {
    id: 9,
    title: "Track Your Body Composition",
    description: "Go beyond weight—understand muscle, fat, and water percentages in your body.",
    author: "Dr. Hafiz Nugroho",
    image: "https://images.unsplash.com/photo-1542736667-069246bdbc94",
    link: "/article/9",
    category: "Body Metrics & Analysis"
  },
  {
    id: 10,
    title: "Basal Metabolic Rate Explained",
    description: "Learn how BMR affects your calorie needs and how to use it to plan your health goals.",
    author: "Dr. Farah Nurani",
    image: "https://images.unsplash.com/photo-1627483263859-0be6a51febe5",
    link: "/article/10",
    category: "Body Metrics & Analysis"
  },

  // Health Risks & Prevention
  {
    id: 11,
    title: "Limit Caffeine in the Evening",
    description: "Avoid coffee, tea, or energy drinks after 4 PM to prevent interference with your sleep cycle.",
    author: "Dr. Maya Kusumo",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400&h=300&fit=crop",
    link: "/article/11",
    category: "Health Risks & Prevention"
  },
  {
    id: 12,
    title: "Avoid Heavy Meals Before Bed",
    description: "Eating heavy or spicy food before bed can cause indigestion and interfere with sleep quality.",
    author: "Dr. Citra Manik",
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400&h=300&fit=crop",
    link: "/article/12",
    category: "Health Risks & Prevention"
  },
  {
    id: 13,
    title: "Reduce Alcohol Consumption",
    description: "Alcohol may make you sleepy, but it disrupts sleep stages and lowers overall sleep quality.",
    author: "Dr. Aditya Mahendra",
    image: "https://cdn.aarp.net/content/dam/aarpe/en/home/health/healthy-living/how-to-cut-back-on-drinking/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.932.jpeg/content/dam/aarp/health/healthy-living/2020/01/1140-hand-stopping-drink.jpg",
    link: "/article/13",
    category: "Health Risks & Prevention"
  },
  {
    id: 14,
    title: "Risks of Sleep Deprivation",
    description: "Chronic sleep loss can increase risk for heart disease, obesity, and depression.",
    author: "Dr. Riko Aditya",
    image: "https://images.unsplash.com/photo-1510070009289-b5bc34383727",
    link: "/article/14",
    category: "Health Risks & Prevention"
  },
  {
    id: 15,
    title: "How Stress Affects Your Heart",
    description: "Unmanaged stress can lead to high blood pressure and heart conditions.",
    author: "Dr. Tania Gunawan",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    link: "/article/15",
    category: "Health Risks & Prevention"
  },

  // Nutrition & Diet
  {
    id: 16,
    title: "Balanced Meal Planning",
    description: "Learn how to build meals that meet your nutritional needs with the right portions.",
    author: "Dr. Mita Saraswati",
    image: "https://images.unsplash.com/photo-1604908812244-d86b2111ad5f",
    link: "/article/16",
    category: "Nutrition & Diet"
  },
  {
    id: 17,
    title: "Hydration and Health",
    description: "Drinking enough water is essential for metabolism, brain function, and energy.",
    author: "Dr. Haris Ibrahim",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1fc57aa",
    link: "/article/17",
    category: "Nutrition & Diet"
  },
  {
    id: 18,
    title: "Best Foods for Better Sleep",
    description: "Certain foods like almonds, bananas, and chamomile tea can help you sleep better.",
    author: "Dr. Melina Wibowo",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    link: "/article/18",
    category: "Nutrition & Diet"
  },
  {
    id: 19,
    title: "Cutting Down on Sugar",
    description: "Too much sugar can increase fat storage and disrupt energy levels.",
    author: "Dr. Fajar Yulian",
    image: "https://images.unsplash.com/photo-1510626176961-4bfb7f9ada2d",
    link: "/article/19",
    category: "Nutrition & Diet"
  },
  {
    id: 20,
    title: "Understanding Macronutrients",
    description: "Learn the role of carbs, protein, and fat in your diet and how to balance them.",
    author: "Dr. Indah Ratnasari",
    image: "https://images.unsplash.com/photo-1606788075761-5cc1e8d276f4",
    link: "/article/20",
    category: "Nutrition & Diet"
  },

  // Mind & Motivation
  {
    id: 21,
    title: "Practice Relaxation Techniques",
    description: "Meditation, deep breathing, or light yoga before bed can calm your mind and body.",
    author: "Dr. Sari Utami",
    image: "https://www.betterup.com/hubfs/man-in-yoga-pose-with-hands-clasped.jpg",
    link: "/article/21",
    category: "Mind & Motivation"
  },
  {
    id: 22,
    title: "Keep a Sleep Diary",
    description: "Track your sleep patterns and habits to identify issues and improve your sleep.",
    author: "Dr. Nina Alamsyah",
    image: "https://journey.cloud/content_assets/journal/closeup-hands-writing-journal.jpg",
    link: "/article/22",
    category: "Mind & Motivation"
  },
  {
    id: 23,
    title: "Journaling for Mental Clarity",
    description: "Writing daily can reduce stress, clarify thoughts, and improve sleep quality.",
    author: "Dr. Yuni Rahma",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136",
    link: "/article/23",
    category: "Mind & Motivation"
  },
  {
    id: 24,
    title: "Power of Positive Thinking",
    description: "Shifting your mindset can improve your mental and physical health.",
    author: "Dr. Sinta Lesmana",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60",
    link: "/article/24",
    category: "Mind & Motivation"
  },
  {
    id: 25,
    title: "Mindfulness for Better Sleep",
    description: "Practicing mindfulness before bed improves relaxation and sleep onset.",
    author: "Dr. Dion Prabowo",
    image: "https://images.unsplash.com/photo-1554774853-b614f5d43f3e",
    link: "/article/25",
    category: "Mind & Motivation"
  }
];



  // Filter articles based on selected category
  const filteredArticles = selectedFilter === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedFilter);

  // Get visible articles
  const displayedArticles = filteredArticles.slice(0, visibleArticles);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setVisibleArticles(6); // Reset to show first 6 when filter changes
  };

  const handleSeeMore = () => {
    setVisibleArticles(prev => prev + 6);
  };

  return (
    <section className="px-6 py-16">
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => handleFilterClick('Healthy Lifestyle')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedFilter === 'Healthy Lifestyle'
                ? 'bg-[#A4B465] text-white'
                : 'border-2 border-[#626F47] text-[#626F47]'
            }`}
          >
            Healthy Lifestyle
          </button>
          <button
            onClick={() => handleFilterClick('Body Metrics & Analysis')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedFilter === 'Body Metrics & Analysis'
                 ? 'bg-[#A4B465] text-white'
                 : 'border-2 border-[#626F47] text-[#626F47]'
            }`}
          >
            Body Metrics & Analysis
          </button>
          <button
            onClick={() => handleFilterClick('Health Risks & Prevention')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedFilter === 'Health Risks & Prevention'
                ? 'bg-[#A4B465] text-white'
                : 'border-2 border-[#626F47] text-[#626F47]'
            }`}
          >
            Health Risks & Prevention
          </button>
          <button
            onClick={() => handleFilterClick('Nutrition & Diet')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedFilter === 'Nutrition & Diet'
                ? 'bg-[#A4B465] text-white'
                : 'border-2 border-[#626F47] text-[#626F47]'
            }`}
          >
            Nutrition & Diet
          </button>
          <button
            onClick={() => handleFilterClick('Mind & Motivation')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedFilter === 'Mind & Motivation'
                ? 'bg-[#A4B465] text-white'
                : 'border-2 border-[#626F47] text-[#626F47]'
            }`}
          >
            Mind & Motivation
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedArticles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="group block bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#626F47] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <p className="text-xs text-gray-500">
                  Author: {article.author}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* See More Button */}
        {visibleArticles < filteredArticles.length && (
          <div className="flex justify-center">
            <button
              onClick={handleSeeMore}
              className="bg-[#626F47] text-white px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              See more
            </button>
          </div>
        )}

        {/* No articles message */}
        {filteredArticles.length === 0 && (
          <div className="text-center text-white py-12">
            <p className="text-xl">No articles found for this category.</p>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default TipsHomepage;