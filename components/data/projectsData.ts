export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;   // الصورة التي تظهر والكارت مغلق
  screenshots: string[]; // مصفوفة الصور التي ستظهر داخل الموبايل عند الفتح
  tags: string[];
  link: string;
}

export const projectsData: Project[] = [
  {
    id: "quiz-app",
    title: "AI Quiz Master",
    category: "Flutter Development",
    description: "A sophisticated quiz platform built with Flutter, featuring dynamic AI question generation and smooth interface animations.",
    thumbnail: "/projects/quiz-thumb.jpg", 
    screenshots: [
      "/projects/quiz1.jpg",
      "/projects/quiz2.jpg",
      "/projects/quiz3.jpg",
        "/projects/quiz4.jpg", 
          "/projects/quiz5.jpg",
            "/projects/quiz6.jpg",     
            "/projects/quiz7.jpg", 
              "/projects/quiz8.jpg",                   
              "/projects/quiz9.jpg", 
              "/projects/quiz11.jpg", 
          
          
    ],
    tags: ["Flutter", "Dart", "Generative AI", "Firebase"],
    link: "#"
  },
  {
    id: "news-app",
    title: "Global Insight News",
    category: "Flutter Development",
    description: "Modern news aggregator app with real-time API integration, offline reading mode, and a clean Material 3 design.",
    thumbnail: "/projects/news-thumb.jpg",
    screenshots: [
      "/projects/news1.jpg",
      "/projects/news2.jpg",
      "/projects/news3.jpg",
      "/projects/news4.jpg",
      "/projects/news5.jpg",
      "/projects/news6.jpg",
      "/projects/news7.jpg",
      "/projects/news8.jpg",
      "/projects/news9.jpg",
      "/projects/news10.jpg",
      "/projects/news11.jpg",
      "/projects/news12.jpg",
      "/projects/news13.jpg",
      "/projects/news14.jpg",
     
    ],
    tags: ["Flutter", "REST API", "State Management", "NewsAPI"],
    link: "#"
  },
  {
    id: "delivery-app",
    title: "QuickBite Delivery",
    category: "Flutter Development",
    description: "Full-stack food delivery solution with real-time map tracking, secure checkout, and complex state handling.",
    thumbnail: "/projects/delivery-thumb.jpg",
    screenshots: [
      "/projects/quiz2.jpg"
      
    ],
    tags: ["Flutter", "Google Maps", "Stripe", "Node.js"],
    link: "#"
  }
];