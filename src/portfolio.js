
//Summary And Greeting Section
import emoji from "react-easy-emoji";

const greeting = {
  //Summary and Greeting
  username: "Zachary Mollenhour",
  title: "Hi all, I'm Zach",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and backend applications with JavaScript / Reactjs / Nodejs / C++ / Python and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1yZkqn6F7dE6VGAGXH2yibxWGgNWNYcsH/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  //Links to my social for home page
  github: "https://github.com/zacharymollenhour",
  linkedin: "https://www.linkedin.com/in/zachary-mollenhour-3820b3126/",
  gmail: "zacharymmollenhour@gmail.com",
};

//Skills Section
const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Develop highly responsive Back end applications for high level companies"),
    emoji("⚡ I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ]
};


const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/UI Design",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};


const workExperiences = {
  viewExperiences: true, 
  experience: [
    {
      role: "Systems Engineer",  
      company: "Florida Blue",
      companylogo: require("./assets/images/florida-blue-logo_0.jpg"),
      date: "June 2019 – Present",
      desc: "Design and implementation of the 99.99% up-time REST API for the critical progressive web application",
      descBullets: [
        "Integrating with third-party services and external APIs as a part of implementation of the high-profile single page application",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Owner",
      company: "Freedom IT Solutions",
      companylogo: require("./assets/images/freedomit.png"),
      date: "May 2020 – Present",
      desc: "Reviewing the quality of code for the business-critical progressive web application maintaining code and design consistency across different team members",
      descBullets: [
        "Oversaw the Software Development Teams as well as all Infrastructure projects",
        "Developed and maintain the Swift App and Website Design"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "zacharymmollenhour", // Change to your github username to view your profile in Contact Section.
  showGithubProfile : "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/florida-blue-logo_0.jpg"),
      link: "http://floridablue.com"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Future Business Leaders of America",
      subtitle: "Placed first in the state in networking and software development categories",
      image: require("./assets/images/FBLA-Color-web.png"),
      footerLink: [
        { name: "Website", url: "https://www.fbla-pbl.org/" },
        { name: "Software Development", url: "https://www.fbla-pbl.org/competitive-event/coding-programming/" },
        { name: "Networking", url: "https://www.fbla-pbl.org/competitive-event/networking-concepts-fbla/" }
      ]
    },
    {
      title: "Phi Theta Kappa Honor Society",
      subtitle: "Current member of the nationally recognized Phi Theta Kappa Honor Society",
      image: require("./assets/images/ptk_logo_rgb_vert_sq.jpg"),
      footerLink: [{ name: "View Phi Theta Kappa Honor Society", url: "https://www.ptk.org/" }]
    },

    {
      title: "MTA Software Developer",
      subtitle: "Completed Certifcation from Microsoft for Software Development",
      image: require("./assets/images/mslogo.jpg"),
      footerLink: [
        { name: "Certification", url: "https://docs.microsoft.com/en-us/learn/certifications/exams/98-361" },
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND HELP OTHER DEVELOPERS LEARN 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};


const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "DISCUSS MENTORING OR SIMLY WANT TO SAY HI? MY INBOX IS OPEN FOR ALL",
  number: "(904)-553-2614",
  email_address: "zacharymmollenhour@gmail.com"
};


const twitterDetails = {

  userName : "zackmollenhourtech"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
