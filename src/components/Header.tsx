import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="flex items-center justify-between bg-zinc-800 w-full h-10 px-14">
            <Link to='/' className="text-zinc-100 font-semibold hover:scale-110 transition-all">
                Lab Exams
            </Link>

            <nav className="flex items-center gap-10 text-gray-100">
                <Link to='/' >Home</Link>
                <Link to='/campaign' >Campanhas</Link>
                <Link to='/schedule' className="bg-zinc-500 hover:bg-zinc-400/80 py-1 px-4 rounded-lg font-medium">AGENDAR</Link>
            </nav>
        </header>
    )
}