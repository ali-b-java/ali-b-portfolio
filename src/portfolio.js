/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ali B",
  title: "Hi all, I'm Ali - Java Software Engineer",
  subTitle: emoji(
    "A results-driven Java Developer with 7+ years of industry experience in designing, developing, and maintaining robust backend systems and enterprise-level applications using Java, Spring Boot, and related technologies. Skilled in full software development lifecycle, integration, and performance optimization."
  ),
  resumeLink:
    "https://drive.google.com/file/d/13uxM3IFLzYhoIT8M_5_rhAZ0Jz1wgdxj/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ali-b-dev",
  // linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "dev.ali.java@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Specialize In",
  subTitle: "I specialize in building scalable REST APIs and microservices using Spring Boot. My expertise includes optimizing JVM performance and fine-tuning garbage collection for high-throughput applications. I have hands-on experience designing distributed systems with technologies like Kafka, Redis, and RabbitMQ. I'm proficient in cloud-native deployments leveraging Docker, Kubernetes, and AWS. Additionally, I focus on creating secure applications using OAuth2, JWT, and SAML protocols. I also help organizations modernize monolithic applications by transitioning them to microservices architectures.",
  skills: [
    emoji(
      "⚡ Core Java & JVM Expertise: Java 8/11/17+ (Streams, Lambdas, Optional, CompletableFuture), Multithreading & Concurrency (ThreadPool, Executors, Synchronization), Memory Management (GC Tuning, Heap/PStack, JVM Profiling), Design Patterns (Singleton, Factory, Observer, Strategy)"
    ),
    emoji("⚡ Backend & Frameworks: Spring Boot (Auto-config, Actuator, Profiles), Spring Cloud (Eureka, Zuul, Config Server), Hibernate/JPA (L2 Cache, N+1 Fix, Query Optimization), RESTful APIs (Swagger, OpenAPI, Pagination), GraphQL (Apollo, Schema Design)"),
    emoji(
      "⚡ Cloud & DevOps: AWS: EC2, S3, Lambda, RDS, EKS (Kubernetes), Docker (Containerization, Docker Compose), CI/CD: Jenkins, GitHub Actions, GitLab CI ,IaC: Terraform, CloudFormation"
    ),
    emoji(
      "⚡ Testing & Debugging: Unit Testing: JUnit 5, Mockito, TestNG, Integration Testing: TestContainers, Performance Testing: JMeter, Gatling"
    ),
    emoji(
      "⚡ Architecture & Scalability: Microservices (Service Discovery, Circuit Breakers), Event-Driven: Kafka, RabbitMQ, Monolith: Cloud Migration"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java SE/EE (8-17)",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Spring MVC",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Hibernate / JPA",
      fontAwesomeClassname: "	fas fa-database"
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
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },

       {
      skillName: "Maven / Gradle",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "NoSQL (MongoDB, Redis)",
      fontAwesomeClassname: "fas fa-server"
    },
     {
      skillName: "JUnit / Mockito / TestNG",
      fontAwesomeClassname: "fas fa-flask"
    },
     {
      skillName: "Git / GitHub / Bitbucket",
      fontAwesomeClassname: "fab fa-github"
    },
      {
      skillName: "Jenkins / CI-CD Pipelinest",
      fontAwesomeClassname: "fas fa-sync-alt"
    },
      {
      skillName: "RESTful Web Services / SOAP",
      fontAwesomeClassname: "fas fa-exchange-alt"
    },
    {
      skillName: "Microservices Architecture",
      fontAwesomeClassname: "	fas fa-project-diagram"
    },
      {
      skillName: "Agile / Scrum Methodologies",
      fontAwesomeClassname: "fas fa-users-cog"
    },
      {
      skillName: "SQL / PL-SQL / PostgreSQL / MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/Nexus_logo_landscape-black.webp"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "95%"
    },
    {
      Stack: "Programming",
      progressPercentage: "99%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Java Developer",
      company: " NexusTech Solutions ",
      companylogo: require("./assets/images/Nexus_logo_landscape-black.jpg"),
      date: "May 2022 - Present",
      desc: "Senior Java Developer with deep expertise in microservices, JVM optimization, and building scalable, resilient systems in enterprise environments.",
      descBullets: [
        "Architected and optimized distributed microservices using Spring Boot, Saga pattern, and custom Gradle/Spring tooling.",
        "Solved critical production issues including JVM crashes and cluster-wide performance bottlenecks.",
        "Led zero-downtime deployments with blue-green strategies and Docker container optimizations.",
        "Built scalable infrastructure for metrics, API validation, and hybrid caching (Redis + in-memory) to improve system reliability."
      ]
    },
    {
      role: "Java Backend Engineer",
      company: "Summit Financial Systems",
      companylogo: require("./assets/images/cropped-summit.png"),
      date: "Feb 2019 – May 2022",
      desc: "Java Backend Engineer with deep expertise in optimizing legacy systems, financial integrations, and high-performance batch processing.",
      descBullets: [
        "Re-engineered critical legacy systems and COBOL data integration using JPA converters and custom connection pools.",
        "Improved backend performance and throughput by implementing distributed locking (ZooKeeper) and database deadlock resolutions.",
        "Secured multi-tenant financial systems with JWT/SAML support and circuit breaker patterns for SWIFT network resilience.",
        "Reduced memory footprint and enhanced batch job efficiency through JPA optimization and custom resource handling"
      ]
    },

        {
      role: "Software Engineer",
      company: "Urban Mobility Technologies",
      companylogo: require("./assets/images/Urban.png"),
      date: "Sep 2017 – Jan 2019",
      desc: "Software Engineer with hands-on expertise in scalable microservices, geospatial optimization, and secure real-time dispatch systems.",
      descBullets: [
        "Engineered high-performance microservices for real-time mobility using Java concurrency, DelayQueue, and geospatial indexing.",
        "Designed a custom Spring Cloud Config backend and OAuth2 provider to manage configuration and authentication securely.",
        "Resolved critical race conditions and performance issues with advanced JVM tuning and concurrency primitives (Phaser, string deduplication).",
        "Standardized team workflows by creating custom Maven archetypes and protobuf/JSON serialization strategies."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Contributed to the core architecture, backend systems, and scalable infrastructure from the ground up.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Played a key role in transforming business ideas into reliable, production-ready tech solutions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Oracle Certified Professional: Java SE",
      subtitle:
        "Validated expertise in Java programming and object-oriented design principles. Solidified foundation for enterprise-level development.",
      image: require("./assets/images/oracle.png"),
      imageAlt: "Oracle Certified Professional: Java SE",
      footerLink: [
    
      ]
    },
    {
      title: "Spring Framework Mastery",
      subtitle:
        "Completed advanced coursework on Spring Boot, Spring Security, and Spring Cloud for building microservices and enterprise applications.",
      image: require("./assets/images/spring_certification.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      
      ]
    },

    {
      title: "Microservices Architecture with Java",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/java_certification.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
      
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    [
    "Discuss a project or just want to say hi? My Inbox is open for all."
    ],
  number: "+1 (214) 831-8782",
  email_address: "dev.ali.java@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
