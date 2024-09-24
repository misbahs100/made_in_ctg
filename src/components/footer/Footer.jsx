const Footer = () => {
    return (
        <footer className="bg-gray-200 mt-8 p-6">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <p className="text-xl font-bold text-gray-500 hover:text-gray-400">MADE <sub>in</sub>CTG</p>
                <p className="py-2 text-gray-500 sm:py-0">All rights reserved</p>
            </div>
            <div className="container mx-auto px-6 py-3 flex justify-start items-center">
                <code className="py-2 text-gray-500 sm:py-0">Developed by misbahs100</code>
            </div>
        </footer>
    );
};

export default Footer;