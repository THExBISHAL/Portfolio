import { useState } from "react";
import { Progress } from "@/components/ui/progress";

function SkillSection() {
  const skills = [
    { name: "Java", level: 70, category: "lang" },

    { name: "HTML", level: 90, category: "frontend" },
    { name: "CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 80, category: "frontend" },
    { name: "React", level: 75, category: "frontend" },
    { name: "Tailwind CSS", level: 80, category: "frontend" },

    { name: "Node.js", level: 70, category: "backend" },
    { name: "Express", level: 70, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },

    { name: "Git/GitHub", level: 80, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "IntelliJ", level: 95, category: "tools" },
  ];

  const categories = ["all", "frontend", "backend", "tools"];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="md:px-20 px-6 py-16 bg-blue-950 text-gray-200"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-10">
        <h2 className="font-bold text-3xl text-center md:text-left mb-4 md:mb-0">
          <span className="text-yellow-700">My </span>Skills
        </h2>
        <div className="hover:scale-105">
          <a
            href="#"
            target="_blank"
            className="text-base font-medium bg-yellow-800 hover:bg-yellow-700 transition-colors px-4 py-2 rounded-lg text-gray-200 shadow-md "
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, key) => (
          <button
            key={key}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 capitalize rounded-md text-sm sm:text-base font-semibold transition-all hover:bg-green-800 duration-200 cursor-pointer ${
              activeCategory === category
                ? "bg-yellow-800 text-black"
                : "text-gray-300 hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSkills.map((skill, key) => (
          <div
            key={key}
            className="bg-blue-900 hover:shadow-2xl transition-all hover:scale-103 duration-300 p-6 rounded-xl group shadow-md border border-blue-950"
          >
            <h3 className="font-semibold text-lg mb-3 text-gray-300 group-hover:text-yellow-400">
              {skill.name}
            </h3>
            <Progress
              value={skill.level}
              max={100}
              className="h-2 bg-gray-700 rounded-full overflow-hidden transition-all duration-1000 ease-out [&>div]:bg-gray-500 [&>div]:rounded-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
