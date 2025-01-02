function Skills() {
    const skills = [
        { category: "Frontend", items: ["React", "JavaScript", "HTML5", "Adobe Sensei", "TailwindCSS"] },
        { category: "Backend", items: ["Tabnine", "Python", "CodeWhisperer", "SQL", "Pluralsight Flow"] },
        { category: "Tools", items: ["GitHub Copilot", "Testim", "AWS", "DeepCode", "Jira"] },
        { category: "Soft Skills", items: ["Problem Solving", "Team Leadership", "Communication", "Agile", "Time Management"] }
    ];

    try {
        return (
            <section data-name="skills" id="skills" className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 data-name="skills-title" className="text-3xl font-bold text-center mb-12">My Skills</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skillGroup, index) => (
                            <div key={index} 
                                 data-name={`skill-group-${skillGroup.category.toLowerCase()}`}
                                 className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold mb-4 text-gradient">{skillGroup.category}</h3>
                                <ul className="space-y-2">
                                    {skillGroup.items.map((skill, skillIndex) => (
                                        <li key={skillIndex} 
                                            data-name={`skill-item-${skill.toLowerCase()}`}
                                            className="flex items-center">
                                            <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return <div>Error loading skills section</div>;
    }
}
