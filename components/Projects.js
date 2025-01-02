function Projects() {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "A full-featured e-commerce platform with React and Node.js",
            image: "https://placehold.co/600x400",
            tags: ["React", "Node.js", "MongoDB"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application",
            image: "https://placehold.co/600x400",
            tags: ["React", "Firebase", "TailwindCSS"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Portfolio Website",
            description: "A responsive portfolio website template",
            image: "https://placehold.co/600x400",
            tags: ["React", "TailwindCSS"],
            liveLink: "#",
            githubLink: "#"
        }
    ];

    try {
        return (
            <section data-name="projects" id="projects" className="section bg-white">
                <div className="container mx-auto px-4">
                    <h2 data-name="projects-title" className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} 
                                 data-name={`project-card-${index}`}
                                 className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <img src={project.image} 
                                     alt={project.title}
                                     className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex}
                                                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <a href={project.liveLink}
                                           className="text-blue-600 hover:text-blue-700 flex items-center">
                                            <span>Live Demo</span>
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        <a href={project.githubLink}
                                           className="text-gray-600 hover:text-gray-700 flex items-center">
                                            <span>GitHub</span>
                                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.48v-1.697c-2.782.605-3.369-1.338-3.369-1.338-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852v2.744c0 .267.18.578.688.48C19.138 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return <div>Error loading projects section</div>;
    }
}
