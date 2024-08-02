export default () => {

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ]
    return (
        <footer className="pt-40">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-100 md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    <img src="https://www.srit.ac.in/wp-content/uploads/2022/01/iste.png" className="w-32 sm:mx-auto" />
                    <p>
                        ISTE NITH
                    </p>
                    
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p>© 2024 All rights reserved.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        {
                            footerNavs.map((item, idx) => (
                                <li className="text-gray-100 hover:text-gray-500 duration-150">
                                    <a key={idx} href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>  
            </div>
        </footer>
    )
}