import { FaUserGraduate } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

function EducationSection() {
  const educationList = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      institution: "Heritage Institute of Technology",
      duration: "2023 - 2026",
      location: "Kolkata, WB",
      stream: "Computer Science and Engineering",
    },
    {
      id: 2,
      degree: "Diploma in Engineering",
      institution: "Murshidabad Institute of Technology",
      duration: "2019 - 2022",
      location: "Murshidabad, WB",
      stream: "Civil Engineering",
    },
    {
      id: 3,
      degree: "Higher Secondary Education",
      institution: "Lalbagh Singhi High School",
      duration: "2017 - 2019",
      location: "Murshidabad, WB",
      stream: "PCM with Computer Application",
    },
  ];

  return (
    <section id="education" className="w-full px-4  py-20 bg-blue-950">
      <div className="flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-300 cursor-default">
          <span className="text-yellow-700">My</span> Education
        </h2>

        {educationList.map((edu) => (
          <div
            key={edu.id}
            className="text-gray-300 grid grid-cols-1 gap-4 hover:shadow-2xl transition-all duration-300 bg-blue-900 lg:mx-40 mx-5 my-5 rounded-2xl p-6 pl-10 shadow-md border border-blue-950"
          >
            <div className="flex items-center gap-4 text-yellow-600 text-2xl font-bold cursor-default">
              <FaUserGraduate />
              <span>{edu.degree}</span>
            </div>
            <h3 className="text-md text-gray-300 font-medium">
              {edu.institution}
            </h3>
            <div className="flex gap-5 text-gray-300 flex-wrap cursor-default">
              <div className="flex gap-2 items-center">
                <IoCalendarOutline className="text-gray-300" />
                <p className="text-gray-300">{edu.duration}</p>
              </div>
              <div className="flex gap-2 items-center">
                <CiLocationOn className="text-gray-300" />
                <p className="text-gray-300">{edu.location}</p>
              </div>
            </div>
            <p className="text-md text-gray-300">{edu.stream}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
