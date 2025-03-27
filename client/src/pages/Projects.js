import React from 'react';
import './Projects.css';
import Header from "../components/Header";
import Footer from '../components/Footer';

const ProjectCard = ({ title, description, githubLink, tags }) => {
    return (
        <div className="project-card">
            <h3>
                {githubLink ? (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-title-link">
                        {title}
                    </a>
                ) : (
                    <span className="project-title-no-link">{title}</span>
                )}
            </h3>
            <p>{description}</p>
            {/*
            no tags at the moment, maybe edit later. 
            <div className="project-tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
             */}
        </div>
    );
};

const Projects = () => {
    const projects = {

        networkRelated: [
            {
                title: "Detecting suspicious behavior in the network",
                description: "A tool for uses HuggingFace transformer models to identify suspicious network activity in pcap files leverages transfer learning with pre-trained language models.",
                githubLink: "https://github.com/MikaHurvits/Network-Anomaly-Detection",
                // tags: ["Wireshark", "Network Analysis", "Python"]
            },

            {
                title: "Visual diagram of traffic in the network",
                description: "A system that parses PCAP files to extract network device information and visualize network conversations done in the given pcap file. It provides a tool to generate network diagrams and analyze the traffic between devices.",
                githubLink: "https://github.com/MikaHurvits/Conversations-Visualizer",
                // tags: ["Wireshark", "Network Analysis", "Python"]
            },
            
            {
                title: "correlating Database into network analysis and trafic identification",
                description: "designed a system to analyze pcap files while integrating data from a DB (SQL based) containing identifiers of known devices in the network. The system receives as an input a pcap file, extracting from it as many identifiers as possible from Ethernet, IP and transport layer protocols (MAC addresses, IP addresses, TCP/UDP ports). In addition to that, the system also identifies key AAA attributes from protocols such as RADIUS and DIAMETER which improve user and device correlation in dynamic network environments. When processing a pcap file, the system extracts these identifiers and queries the database to map captured data to known identities. This allows the system to trace individual sessions across multiple device and also incorporating Enhanced SQL queries can identify suspicious behavior such as repeated failed logins or unusual session durations.",
                githubLink: "", //add an option for no clicking. (for projects without a repo)
                            // tags: ["Wireshark", "Network Analysis", "Python"]
            },

        ],

        practicalAI: [
            {
                title: "Sarcasm detction in tweets",
                description: "Performed fine-tuning of both BERT and Llama models for detecting sarcasm in tweets. Implemented in context learning to apply Chain-Of-Thought methodology, further refining the model's ability to discern sarcastic tweets and explaining its decision",
                githubLink: "https://github.com/galamit1/TAU-Workshop",
                // tags: ["Python", "PyTorch", "Machine Learning"]
            },

            {
                title: "Phishing detection",
                description: "Used LLM's (BERT specifically) to analyze email content, subject lines and metadata to identify phishing attempts",
                githubLink: "  ",
                // tags: ["Python", "PyTorch", "Machine Learning"]
            },

            {
                title: "Spectral clustering for tackling complex stuructures for classification",
                description: "In the process of analysing a network, Spectral Clustering in some cases helps to reveal hidden communities and subnetworks. as well as better identifing more complex communication problems",
                githubLink: "https://github.com/MikaHurvits/SpectralClustering", //edit
                // tags: ["Python", "PyTorch", "Machine Learning"] 
            },

        ],

        wedDevelopment: [
            {
                title: "Mentor-Mentee Web application for QueenB",
                description: "An application that aims to connect mentors and mentees. Developed using React, Express, Node.js and PostgreSQL",
                githubLink: "https://github.com/Eden-Ismah-Moshe/Queen-B-Bootcamp",
                // tags: ["Python", "PyTorch", "Machine Learning"]
            },

            {
                title: "MERN application for recipes recommondations",
                description: "A machine learning project for classification using PyTorch.",
                githubLink: "",
                // tags: ["Python", "PyTorch", "Machine Learning"]
            },

        ],


        others: [
            {
                title: "Image description generator",
                description: "using computer vision models, constructed a platform for uploading an image and receiveing a verbal description of it. Using sprchj, I managed to result with a nice UI for this task ",
                githubLink: "https://github.com/MikaHurvits/Image-description-generator",
                // tags: ["Python", "PyTorch", "Machine Learning"]
            },

            {
                title: "Password strength predicator",
                description: "Developed a model that evaluates password strength ans suggest improvments based on linguistic patterns.",
                githubLink: "",
                // tags: ["Python", "PyTorch", "Machine Learning"]
            },

        ],    };




    return (
        <div> 
        <Header/>
        <div className="projects-container">
            <h1 className="projects-page-title">My Projects</h1>
            
            <section className="project-section">
                <h2>Network related projects: </h2>
                <div className="project-grid">
                    {projects.networkRelated.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>

            <section className="project-section">
                <h2>Practical Machine Learning projects: </h2>
                <div className="project-grid">
                    {projects.practicalAI.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>

            <section className="project-section">
                <h2>Web Development projects: </h2>
                <div className="project-grid">
                    {projects.wedDevelopment.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>

            <section className="project-section">
                <h2>Other projects done mainly by boredom: </h2>
                <div className="project-grid">
                    {projects.others.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>







        </div>
        <Footer/>
    </div>
    );
};

export default Projects;