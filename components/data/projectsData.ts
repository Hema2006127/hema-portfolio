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
      "/projects/quiz-1.jpg",
      "/projects/quiz-2.jpg",
      "/projects/quiz-3.jpg",
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
      "/projects/news-1.jpg",
      "/projects/news-2.jpg",
      "/projects/news-3.jpg",
       "/projects/news-4.jpg",
        "/projects/news-5.jpg",
         "/projects/news-6.jpg",
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
      "/projects/delivery-1.jpg",
      "/projects/delivery-2.jpg",
      "/projects/delivery-3.jpg",
    ],
    tags: ["Flutter", "Google Maps", "Stripe", "Node.js"],
    link: "#"
  }
];