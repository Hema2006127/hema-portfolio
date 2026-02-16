export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillsData: SkillCategory[] = [
  {
    category: "Core Development",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 85 },
      { name: "Responsive UI", level: 85 },
      { name: "Animations", level: 80 },
    ],
  },
  {
    category: "Architecture & Patterns",
    skills: [
      { name: "Clean Architecture", level: 85 },
      { name: "SOLID Principles", level: 80 },
      { name: "MVVM", level: 75 },
      { name: "Repository Pattern", level: 80 },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Firebase", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Dio", level: 85 },
      { name: "JSON Handling", level: 85 },
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Figma", level: 70 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 80 },
      { name: "Teamwork", level: 85 },
      { name: "Time Management", level: 80 },
    ],
  },
];
