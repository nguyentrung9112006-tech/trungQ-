function Header() {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4">
                <ul className="flex justify-center gap-10 text-lg font-semibold text-gray-700">
                    <li>
                        <a
                            href="/"
                            className="hover:text-orange-500 transition-colors"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="hover:text-orange-500 transition-colors"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="hover:text-orange-500 transition-colors"
                        >
                            Booking
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="hover:text-orange-500 transition-colors"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
