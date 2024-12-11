/*  Placeholders
{
  md_slug: "",
  title: "",
  date: "",
  description: "",
  techStack: [],
  link: "",
}
*/

export const PROJECTS = [
  {
    md_slug: "",
    title: "Secure QR Codes (SQR)",
    date: "April 2024 - May 2024",
    description:
      "Developed Secure QR (SQR) codes to address security vulnerabilities in traditional QR codes, \
       which are prone to QR phishing (quishing) and unauthorized access. Implemented digital signatures \
       and a third-party certification authority to enhance security while maintaining standard compatibility. \
       Used ECDSA for authentication and integrity validation. \
       Each SQR code embeds a URL and its entity's public key, making any content alterations detectable.",
    techStack: ["Python", "ECDSA", "QR"],
    link: "assets/sqr.pdf",
  },
  {
    md_slug: "",
    title: "Predicting Model Runtimes from Tensor Graphs",
    date: "September 2023 - December 2023",
    description:
      "Developed a graph neural network (GNN)-based cost model to predict runtime of tensor computation graphs on the \
       TPUGraphs dataset for a Kaggle competition. Enhanced the baseline GNN with attention layers and introduced \
       runtime violation ratios to address GPU memory constraints when loading graphs into memory. Achieved a 1.25x \
       improvement in validation OPA score over the baseline. Used the Harvard research compute cluster for large-scale training.",
    techStack: ["Python", "PyTorch", "Graph Neural Networks (GNNs)"],
    link: "assets/tpu_graphs.pdf",
  },
  {
    md_slug: "",
    title: "N=1 Type-1 Diabetes Dataset",
    date: "September 2023 - December 2023",
    description:
      "Conducted a personal study to improve glycemic control by creating a 2.5-month dataset integrating \
       diet, fitness, CGM, and insulin pump data. Developed Python scripts for data consolidation, cleaning, \
       and analysis. Used the dataset to explore advanced diabetes management strategies, including predicting \
       glucose levels, insulin dosages, and insulin sensitivity using machine learning and control theory.",
    techStack: ["Python"],
    link: "assets/t1d_dataset.pdf",
  },
  {
    md_slug: "",
    title: "Distributed Stock Exchange",
    date: "April 2023 - May 2023",
    description:
      "Distributed stock exchange system that utilizes decentralized architecture between exchange, \
       institution, broker, and client components. Implemented using gRPC for connections and Paxos \
       for distributed consensus and orderbook replication across exchange servers. Established automatic \
       reconnections between broker/institution and the exchange. Flask and HTML frontend UI. \
       Conducted experiments using trading bots with various strategies to test speed (latency/throughput) \
       and reliability of the system.",
    techStack: ["Python", "gRPC", "Paxos", "Flask", "SQL",],
    link: "",
  },
  {
    md_slug: "",
    title: "Facilitated Variation on Increasingly Complex Boolean Functions",
    date: "April 2023 - May 2023",
    description:
      "Recreated the study by Parter et al., 'Facilitated Variation: How Evolution Learns from Past Environments to Generalize to New Environments.' \
       Used a standard genetic algorithm to evolve encodings of increasingly complex boolean logic gates to fit a goal function. \
       Assessed facilitated variation and modularity in evolved solutions against baseline.",
    techStack: ["Python"],
    link: "assets/boolean_evolution.pdf",
  },
  {
    md_slug: "",
    title: "Auto.Tabs",
    date: "September 2022 - December 2022",
    description:
      "Chrome extension that uses Tensorflow.js and the Chrome API to group tabs \
       together by content similarity. Conducted a week-long user study on the extension’s usability.",
    techStack: ["JavaScript", "Chrome Extension API", "Tensorflow.js", "HCI"],
    link: "assets/auto_tabs.pdf",
  },
  {
    md_slug: "",
    title: "Portal",
    date: "October 2022 - December 2022",
    description:
      "Developed a 3D simulation using linear algebra, including vector functions, planes, and light beam reflections. \
       Created a ray-tracing algorithm to render 3D environments at various resolutions.  \
       Collaborated with mechanical and electrical engineers to model MEMS mirror configurations for AR technologies.",
    techStack: ["Python", "NumPy"],
    link: "",
  },
  // {
  //   md_slug: "",
  //   title: "onCreate();",
  //   date: "June 2022 - August 2022",
  //   description:
  //     "Developed a full-stack Android application for Meta University's capstone project focused on an idea brainstorming social media. \
  //      Implemented features including canvas drawing, idea filtering by stars and keywords, and sharing to Instagram Stories. \
  //      Enabled users to search for ideas, add hashtags, manage ideas in global or private sections, and upvote ideas to earn karma points. \
  //      Utilized Android and Google APIs with a Parse database for backend functionality.",
  //   techStack: ["Java", "XML", "Android Studio", "Parse"],
  //   link: "https://www.youtube.com/watch?v=sNANoI8NWRI",
  // },
  {
    md_slug: "",
    title: "Autonomous Frontier Exploration and Mapping",
    date: "May 2022 - June 2022",
    description:
      "Developed autonomous mapping and exploration for LoCoBot using SLAM, LiDAR, and a depth camera. \
       Compared wavefront frontier detection algorithms with greedy methods through simulations and hardware experiments. \
       Presented a live demo to an Arizona Search and Rescue coordinator.",
    techStack: ["Python", "Robot Operating System (ROS)", "Gazebo"],
    link: "/assets/autonomous_exploration.pdf",
  },
  {
    md_slug: "",
    title: "Blood Sugar Stabilization",
    date: "November 2020 - December 2020",
    description:
      "Web application using Flask, the Dexcom API, and a SQLite database. Allows diabetic users \
       to register/login and connect with their personal continuous glucose monitor database. Displays \
       a selected range of blood sugar to monitor glucose trends.",
    techStack: ["Python", "Flask", "Dexcom API", "SQLite"],
    link: "",
  }
];
