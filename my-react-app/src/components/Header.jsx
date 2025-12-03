function Header() {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4">
                <ul className="flex justify-center gap-10 text-lg font-semibold text-gray-700">
                    <li>
                        <a href="/" className="hover:text-orange-500 transition-colors">
                            Trang trủ
                        </a>
                    </li>
                    <li>
                        <a href="/" className="hover:text-orange-500 transition-colors">
                            Tour
                        </a>
                    </li>
                    <li>
                        <a href="/" className="hover:text-orange-500 transition-colors">
                            Giới Thiệu
                        </a>
                    </li>
                    <li>
                        <a href="/" className="hover:text-orange-500 transition-colors">
                            Liên Hệ
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
