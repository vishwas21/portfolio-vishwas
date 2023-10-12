// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Vishwas",
    middleName: "",
    lastName: "Bhaktavatsala",
    message:
        "Graduate | Software Engineer | Full Stack Web Developer | Programming Enthusiast",
    icons: [
        {
            image: "fa-github",
            url: "https://github.com/vishwas21",
        },
        {
            image: "fa-linkedin",
            url: "https://www.linkedin.com/in/vishwas-b/",
        },
    ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/vishwasb.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../editable-stuff/vishwasb.jpg"),
    imageSize: 250,
    message:
        "Hello, I am a graduate student from Boston University pursuing my Masters of Science in Computer Science. I have 4 years of prior work experience as a Full Stack Developer",
    resume: "https://drive.google.com/file/d/1EJIE167accik3gJrZsJXyONv-z6HoOwc/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "vishwas21", //i.e."johnDoe12Gh"
    reposLength: 3,
    specificRepos: [
        "ExpenseTracker",
        "mane-thindi",
        "legends-heroes-and-monsters",
        "legends-of-valor",
    ],
};

// Leadership SECTION
const leadership = {
    show: false,
    heading: "Leadership",
    message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
    images: [
        {
            img: require("../editable-stuff/vishwasb.jpg"),
            label: "First slide label",
            paragraph:
                "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
        {
            img: require("../editable-stuff/vishwasb.jpg"),
            label: "Second slide label",
            paragraph:
                "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
    ],
    imageSize: {
        width: "615",
        height: "450",
    },
};

// SKILLS SECTION
const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
        { name: "JavaScript", value: 90 },
        { name: "Java", value: 90 },
        { name: "Python", value: 90 },
        { name: "Data Structures", value: 85 },
        { name: "NodeJS", value: 85 },
        { name: "ReactJS", value: 75 },
        { name: "Docker", value: 65 },
        { name: "Microservices", value: 75 },
    ],
    softSkills: [
        { name: "Goal-Oriented", value: 80 },
        { name: "Collaboration", value: 90 },
        { name: "Positivity", value: 75 },
        { name: "Adaptability", value: 85 },
        { name: "Problem Solving", value: 75 },
        { name: "Empathy", value: 90 },
        { name: "Organization", value: 70 },
        { name: "Creativity", value: 90 },
    ],
    publications: [
        {
            name: "Secure Smart Shopping System - IEEE paper published in IJARCS in 2018 (ISSN: 0976-5697).",
        },
        {
            name: "",
        },
    ],
    awards: [
        { name: "Champion's Award - Lowe's India, 2022" },
        { name: "Work Excellence Awards - Lowe's India, 2019-2022" },
        { name: "Work Spot Awards - Lowe's India, 2018-2022" },
    ],
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
        "Hope we can connect on LinkedIn, I would love to learn more about your experiences and if you have or know about any Full Time Software Developer/Full Stack Development oppurtunities. Please feel free to reach out to me at ",
    email: "vishwasb@bu.edu",
};

const experiences = {
    show: true,
    heading: "Work Experience",
    data: [
        {
            role: "Software Development Intern",
            companylogo: require("../assets/img/athenahealth.png"),
            date: "June 2023 – August 2023",
            width: 600,
            height: 200,
        },
        {
            role: "Software Engineer - Full Stack Developer",
            companylogo: require("../assets/img/lowes.png"),
            date: "July 2018 – August 2022",
            width: 400,
            height: 200,
        },
        {
            role: "Technical Intern",
            companylogo: require("../assets/img/dexterousLabs.png"),
            date: "January 2018 – April 2018",
            width: 250,
            height: 200,
        },
    ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
    navBar,
    mainBody,
    about,
    repos,
    skills,
    leadership,
    getInTouch,
    experiences,
};
