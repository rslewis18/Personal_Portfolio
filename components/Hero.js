function Hero() {
    try {
        return (
            <section data-name="hero" id="home" className="section pt-24 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 data-name="hero-title" className="text-5xl md:text-6xl font-bold mb-6 fade-in">
                            Hi, I'm <span className="text-gradient">Ryan Lewis</span>
                        </h1>
                        <p data-name="hero-subtitle" className="text-xl md:text-2xl text-gray-600 mb-8 slide-in">
                            BI Engineer specializing in automating analytics and building secure, scalable data solutions.
                        </p>
                        <div data-name="hero-cta" className="space-x-4">
                            <a href="#projects" 
                               className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                View My Work
                            </a>
                            <a href="#contact" 
                               className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return <div>Error loading hero section</div>;
    }
}
