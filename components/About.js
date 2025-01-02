function About() {
    try {
        return (
            <section data-name="about" id="about" className="section bg-white">
                <div className="container mx-auto px-4">
                    <h2 data-name="about-title" className="text-3xl font-bold text-center mb-12">About Me</h2>
                    <div className="max-w-3xl mx-auto">
                        <p data-name="about-description" className="text-lg text-gray-700 mb-6">
                            Experienced Data Analyst with 13 years of expertise in optimizing workflows, automating analytics, and implementing secure, scalable data solutions. 
							Skilled in cloud technologies and machine learning, I deliver actionable insights and drive efficiency.
                        </p>
                        <p data-name="about-experience" className="text-lg text-gray-700 mb-6">
                           My career highlights include architecting scalable data infrastructures, enhancing data accuracy by 25%, and streamlining analytics processes to save time and improve efficiency.
						   I specialize in creating secure, scalable solutions that drive actionable insights and support organizational success.
                        </p>
                        <div data-name="about-stats" className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div className="p-4 text-center border-gradient rounded-lg">
                                <h3 className="text-3xl font-bold text-blue-600">13+</h3>
                                <p className="text-gray-600">Years Experience</p>
                            </div>
                            <div className="p-4 text-center border-gradient rounded-lg">
                                <h3 className="text-3xl font-bold text-blue-600">25+</h3>
                                <p className="text-gray-600">Projects</p>
                            </div>                
                            <div className="p-4 text-center border-gradient rounded-lg">
                                <h3 className="text-3xl font-bold text-blue-600">15+</h3>
                                <p className="text-gray-600">Technologies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return <div>Error loading about section</div>;
    }
}
