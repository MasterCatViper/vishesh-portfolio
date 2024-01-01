import proj1 from "../utils/proj1.png";
import proj2 from "../utils/proj2.jpg";
import proj3 from "../utils/proj3.jpg";
export const ProjectList = [
  {
    name: "Ping Pong Game",
    image: proj1,
    skills: "Javascript, Socket.IO, NodeJS, CSS, HTML",
    description: {
      p1: "The frontend is a simple HTML/CSS/JavaScript application that uses React.js to render the game and handle user input",
      p2: "The backend is a Nodejs application that uses Socketio to facilitate communication between the two players",
    },
  },
  {
    name: "Recipe Application",
    image: proj2,
    skills: "HTML, CSS, Javascript, ReactJS, NodeJS, MongoDB",
    description: {
      p1: "This Project is a Full Stack Recipe Application that allows users to search for recipes, save recipes and create their own recipes",
      p2: "The Front End of the Application is built with ReactJS and the Back end is built with NodeJS,MongoDB and ExpressJS",
    },
  },
  {
    name: "NASA Web Application",
    image: proj3,
    skills: "HTML, CSS, Javascript, ReactJS, NodeJS, MongoDB, ",
    description: {
      p1: "A Full Stack Web Application created using MERN Stack which fetches all the Planetory Data using SpaceX API",
      p2: "Frontend created using Popular Sci-Fi Web framework Arwes and Backend managed using MVC Software Design Pattern.",
    },
  },
];
