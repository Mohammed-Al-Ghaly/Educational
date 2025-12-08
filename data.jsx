import { CiMap } from "react-icons/ci";
import { FaImages, FaCreditCard } from "react-icons/fa";

export const cardData = [
  {
    id: 1,
    img: <CiMap />,
    title: "Digital Library",
    description:
      "Access a vast collection of e-books and digital resources for learning and research.",
    color: "#E70040",
    bgColor: "#ffDcd1",
  },
  {
    id: 2,
    img: <FaImages />,
    title: "Data Analytics",
    description:
      "Learn to analyze data trends and make informed business decisions with advanced tools.",
    color: "#2DC071",
    bgColor: "#b9eaa8",
  },
  {
    id: 3,
    img: <FaCreditCard />,
    title: "E-Learning Platform",
    description:
      "Explore over 100 online courses covering various skills and professional development.",
    color: "#23a6f0",
    bgColor: "#b2e3ff",
  },
];
export const coursesData = [
  {
    id: 1,
    img: "/public/web-design.jpg",
    department: "Design",
    title: "Graphic Design Fundamentals",
    rating: "4.7",
    description:
      "Master the basics of graphic design, including tools like Adobe Photoshop and Illustrator, to create stunning visuals for branding and marketing.",
    sales: "120",
    price: "$29.99",
    discount: "$14.99",
    duration: "25hr 40min",
    lessons: "50 Lessons",
  },
  {
    id: 2,
    img: "/public/front-end.jpg",
    department: "Programming",
    title: "Full-Stack Web Development",
    rating: "4.9",
    description:
      "Build complete web applications using HTML, CSS, JavaScript, React, and Node.js, from front-end to back-end.",
    sales: "200",
    price: "$49.99",
    discount: "$24.99",
    duration: "80hr 15min",
    lessons: "120 Lessons",
  },
  {
    id: 3,
    img: "/public/back-end.jpg",
    department: "Web Development",
    title: "Backend Development with Python",
    rating: "4.6",
    description:
      "Develop robust server-side applications using Python, Django, and databases to handle data and APIs efficiently.",
    sales: "90",
    price: "$39.99",
    discount: "$19.99",
    duration: "45hr 20min",
    lessons: "70 Lessons",
  },
];

export const ratingData = [
  {
    id: 1,
    stars: "⭐ ⭐ ⭐ ⭐ ⭐",
    img: "/public/front-end.jpg",
    description:
      "The course content was top-notch and very comprehensive. I was particularly impressed with the excellent service and prompt support from the instructors whenever I had a question. This has been a fantastic learning experience.",
    name: "Gamal Mahmoud",
    job: "Software Engineer",
  },
  {
    id: 2,
    stars: "⭐ ⭐ ⭐ ⭐ ⭐",
    img: "/public/web-design.jpg",
    description:
      "I found the practical examples to be incredibly helpful. The excellent service and prompt support made a huge difference in my learning journey. I feel much more confident in my skills now.",
    name: "Ali Hassan",
    job: "Software Engineer",
  },

  {
    id: 3,
    stars: "⭐ ⭐ ⭐ ⭐ ",
    img: "/public/back-end.jpg",
    description:
      "The platform is very user-friendly and the course material is of high quality. I highly recommend this for its quality and reliability. It's a great investment for anyone looking to upskill.",
    name: "Sara Ahmed",
    job: "Software Engineer",
  },
];
