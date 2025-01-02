function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 data-name="footer-title" className="text-2xl font-bold mb-4">Ryan Lewis</h2>
                        <p className="text-gray-400 mb-4">Transforming data into impactful insights with precision</p>
                        <div className="flex justify-center space-x-6 mb-6">
                            <a href="https://www.linkedin.com/in/ryan-lewis-28683551/" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
                            <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
                        </div>
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Ryan Lewis. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        reportError(error);
        return <div>Error loading footer</div>;
    }
}
