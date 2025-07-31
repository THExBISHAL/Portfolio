import { FaGithub } from "react-icons/fa";
import { ImLink } from "react-icons/im";

function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "Blog Application",
      description:
        "Blogify is a full-stack blog app built with the MERN stack (MongoDB, Express.js, React, Node.js). It includes JWT-based authentication, allowing users to create, update, and delete their own posts, as well as comment on others' posts. With a clean UI and secure API structure, it showcases my skills in full-stack development and user access control.",
      tags: ["React", "Express", "Node.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "Kingo is a full-stack e-commerce web app built with the MERN stack (MongoDB, Express.js, React, Node.js). It offers features like user authentication, product browsing, secure checkout, and payment integration. Focused on scalability and user experience, it highlights my skills in full-stack development and modern UI design.",
      tags: ["React", "Express", "Node.js", "MongoDB"],
      demoUrl: "https://ecommerce-client-32cp.onrender.com",
      githubUrl: "https://github.com/THExBISHAL/Ecommerce",
    },
  ];
  return (
    <section id="projects" className="w-full p-4 bg-blue-950">
      <div className="flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-200 ">
          <span className="text-yellow-700">My</span> Projects
        </h2>

        {projects.map((proj) => (
          <div
            key={proj.id}
            className="text-gray-200 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 bg-blue-900 lg:mx-40 mx-5 my-5 rounded-2xl shadow-md border border-blue-950 hover:scale-102 hover:shadow-2xl duration-300"
          >
            <h2 className="text-center font-bold text-lg mt-5 text-yellow-600 ">
              {proj.title}
            </h2>
            <p className="md:mx-10 mx-5">{proj.description}</p>

            <div className="p-4 flex justify-between items-start flex-wrap gap-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex bg-yellow-700 text-gray-300 px-2 py-1 text-xs rounded-full hover:scale-105 transition duration-300 ease-in-out items-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={proj.demoUrl} size={20} target="_blank">
                  <ImLink className="hover:scale-125 transition-transform duration-300" />
                </a>
                <a href={proj.githubUrl} size={20} target="_blank">
                  <FaGithub className="hover:scale-125 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
