export default () => {
    const footerNavs = [
        { href: 'javascript:void()', name: 'Terms' },
        { href: 'javascript:void()', name: 'License' },
        { href: 'javascript:void()', name: 'Privacy' },
        { href: 'javascript:void()', name: 'About us' }
    ];

    return (
        <footer className="pt-40 bg-black text-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-6 text-center">
                    <img src="https://www.srit.ac.in/wp-content/uploads/2022/01/iste.png" className="w-32 mx-auto" alt="Logo" />
                    <p>ISTE NITH</p>
                </div>
                <div className="mt-10 py-10 border-t border-gray-700 flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-center sm:text-left">© 2024 All rights reserved.</p>
                    <ul className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-0">
                        {footerNavs.map((item, idx) => (
                            <li key={idx} className="text-gray-100 hover:text-gray-500 duration-150">
                                <a href={item.href}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
