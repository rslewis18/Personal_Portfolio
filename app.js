function App() {
    try {
        return (
            <div data-name="app">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        reportError(error);
        return <div>Error loading application</div>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
