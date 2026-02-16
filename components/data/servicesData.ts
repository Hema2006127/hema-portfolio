export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
};

export const servicesData: Service[] = [
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Building scalable, high-performance mobile applications from concept to deployment.",
    features: [
      "Flutter Cross-Platform Apps",
      "Android & iOS Deployment",
      "App Store & Play Store Publishing",
      "Performance Optimization",
    ],
    icon: "mobile", // ✅ شغال (موجود في الماب)
  },
  {
    id: "app-architecture",
    title: "App Architecture & System Design",
    description: "Designing clean, maintainable, and scalable application structures for long-term growth.",
    features: [
      "Clean Architecture",
      "SOLID Principles",
      "State Management Setup (Bloc / Provider)",
      "Scalable Project Structure",
    ],
    icon: "architecture", // 👈 عدلتها من "Layers" لـ "architecture" عشان تطابق الـ Map
  },
  {
    id: "backend-integration",
    title: "Backend & API Integration",
    description: "Connecting applications with backend systems and real-time services.",
    features: [
      "REST API Integration",
      "Firebase (Auth, Firestore)",
      "Push Notifications",
      "Secure Authentication Systems",
    ],
    icon: "backend", // ✅ شغال (موجود في الماب)
  },
  {
    id: "ui-ux",
    title: "UI Implementation & Animations",
    description: "Crafting pixel-perfect interfaces with smooth animations and modern UX principles.",
    features: [
      "Responsive Layouts",
      "Custom Animations",
      "Micro-Interactions",
      "UX Optimization",
    ],
    icon: "ui", // ✅ شغال (موجود في الماب باسم ui و ui-ux)
  },
  {
    id: "code-review",
    title: "Code Review & Optimization",
    description: "Improving code quality, performance, and architecture through detailed analysis.",
    features: [
      "Code Refactoring",
      "Performance Profiling",
      "Architecture Review",
      "Best Practices Implementation",
    ],
    icon: "review", // ✅ شغال
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description: "Providing guidance on technology choices, system structure, and scalable solutions.",
    features: [
      "Technology Stack Selection",
      "System Planning",
      "Scalability Strategy",
      "Project Roadmapping",
    ],
    icon: "consulting", // ✅ شغال
  },
];