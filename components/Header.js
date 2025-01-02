function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    try {
        return (
            <header data-name="header" className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 data-name="logo" className="text-2xl font-bold text-gradient"> Ryan Lewis Portfolio</h1>
                    
                    <button data-name="mobile-menu-button" 
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    <nav data-name="desktop-nav" className="hidden md:flex space-x-8">
                        <a href="#home" className="hover:text-blue-600">Home</a>
                        <a href="#about" className="hover:text-blue-600">About</a>
                        <a href="#skills" className="hover:text-blue-600">Skills</a>
                        <a href="#projects" className="hover:text-blue-600">Projects</a>
                        <a href="#contact" className="hover:text-blue-600">Contact</a>
                    </nav>
                </div>

                {isMenuOpen && (
                    <nav data-name="mobile-nav" className="md:hidden bg-white border-t">
                        <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
                            <a href="#home" className="py-2 hover:text-blue-600">Home</a>
                            <a href="#about" className="py-2 hover:text-blue-600">About</a>
                            <a href="#skills" className="py-2 hover:text-blue-600">Skills</a>
                            <a href="#projects" className="py-2 hover:text-blue-600">Projects</a>
                            <a href="#contact" className="py-2 hover:text-blue-600">Contact</a>
                        </div>
                    </nav>
                )}
            </header>
        );
    } catch (error) {
        reportError(error);
        return <div>Error loading header</div>;
    }
}
