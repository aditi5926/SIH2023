import nsut from "../assets/nsut.png"
import dtu from "../assets/dtu.png"
import iitd from "../assets/iitd.png"


export const CollegeData = [
    {
      name: 'NETAJI SUBHAS UNIVERSITY OF TECHNOLOGY',
      id: '11aa12',
      established: 1983,
      description: 'Netaji Subhas Institute of Technology (NSIT), formerly known as Delhi Institute of Technology (DIT), is a prestigious engineering college located in Dwarka, New Delhi, India. NSIT is one of the top engineering institutes in India and is known for its high academic standards, rigorous programs, and excellent faculty.',
      monthly_rank: 2,
      monthly_rating: 94,
      img:nsut,
      previous_ratings: [
        {
          month: 'may',
          rating: 85,
        },
        {
          month: 'jun',
          rating: 91,
        },
        {
          month: 'jul',
          rating: 96,
        },
        {
          month: 'aug',
          rating: 94,
        },
        {
          month: 'sep',
          rating: 94,
        },
      ],
      most_liked_projects: [
        {
          name: "ChatApp",
          githubLink: "",
          description: "A real-time chat application.",
        },
        {
          name: "EcoSaver",
          githubLink: "",
          description: "An application promoting eco-friendly practices and energy conservation.",
        },
        {
          name: "FinanceTracker",
          githubLink: "https://github.com/emilydavis/financetracker",
          description: "A financial tracking application.",
        }
      ]
    },
    {
      name: 'DELHI TECHNOLOGICAL UNIVERSITY',
      established: 1941,
      id: '1212aa',
      description: 'Delhi Technological University (DTU), formerly known as the Delhi College of Engineering (DCE), is one of the most prominent engineering institutions in India.',
      monthly_rank: 3,
      monthly_rating: 91,
      img:dtu,
      previous_ratings: [
        {
          month: 'may',
          rating: 82,
        },
        {
          month: 'jun',
          rating: 84,
        },
        {
          month: 'jul',
          rating: 89,
        },
        {
          month: 'aug',
          rating: 89,
        },
        {
          month: 'sept',
          rating: 91,
        },
      ],
      most_liked_projects: [
        {
          name: "WeatherTracker",
          githubLink: "",
          description: "A weather tracking application.",
        },
        {
          name: "E-commerce Website",
          githubLink: "",
          description: "An e-commerce website.",
        },
        {
          name: "AI Chatbot",
          githubLink: "",
          description: "An AI-powered chatbot.",
        }
      ]
    },
    {
      name: 'INDIAN INSTITUTE OF TECHNOLOGY-DELHI',
      id: '142ab1',
      established: 1961,
      description: 'The Indian Institute of Technology Delhi (IIT Delhi or IITD) is one of the premier engineering institutions in India and is renowned worldwide for its academic excellence, research contributions, and technological innovations.',
      monthly_rank: 1,
      monthly_rating: 98,
      img:iitd,
      previous_ratings: [
        {
          month: 'may',
          rating: 94,
        },
        {
          month: 'jun',
          rating: 100,
        },
        {
          month: 'jul',
          rating: 96,
        },
        {
          month: 'aug',
          rating: 96,
        },
        {
          month: 'sep',
          rating: 98,
        },
      ],
      most_liked_projects: [
        {
          name: "TaskManager",
          githubLink: "",
          description: "A task management application.",
        },
        {
          name: "WeatherApp",
          githubLink: "",
          description: "A weather information application.",
        },
        {
          name: "FinanceTracker",
          githubLink: "",
          description: "A financial tracking application.",
        }
      ]
    }
  ];
  