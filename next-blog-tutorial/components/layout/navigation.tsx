import Link from "next/link";

export default function Navigation() {
    return (
        <header className="container mx-auto flex max-w-screen-lg flex-row items-center px-5 py-14">
            <Link href="/" className="text-4xl font-bold text-red-300">
                NextJS Startup
            </Link>

            <nav className="ml-auto">
                <Link href="/about" className="mr-5">
                About
                </Link>
            </nav>
        </header>
    );
}