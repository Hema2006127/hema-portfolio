export interface Education {
  title: string;
  institution: string;
  logo: string; // رابط الصورة أو المسار (مثلاً /logos/iti.png)
  duration: string;
  description: string;
  isCompleted: boolean;
}

export const educationData: Education[] = [
  {
    title: "Bachelor of Computer Science",
    institution: "Egyptian E-Learning University (EELU)",
    logo: "/eelu.jpg", // حط مسار الصورة هنا
    duration: "2020 — Present",
    description: "Specializing in Software Engineering. Gaining strong foundations in algorithms, data structures, and computer systems.",
    isCompleted: false
  },
  {
    title: "Mobile App Development (Flutter) Track",
    institution: "Information Technology Institute (ITI)",
    logo: "/iti.jpg", 
    duration: "2024",
    description: "Intensive training on Flutter, Dart, state management (Bloc/Riverpod), and clean architecture principles.",
    isCompleted: true
  },
  {
    title: "Mobile Development Specialization",
    institution: "Digital Egypt Pioneers Initiative (DEPI)",
    logo: "/depi.jpg",
    duration: "2024",
    description: "Advanced program focused on building scalable mobile solutions and professional soft skills.",
    isCompleted: true
  }
];