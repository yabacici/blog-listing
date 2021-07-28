import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <header>
                <Link href="/">
                    <a>
                        <h1>Welcome to Contentful</h1>
                    </a>
                </Link>
            </header>

            <div className="page-content">{children}</div>
            <footer>
                <p>CÉCILE EBOA 2021</p>
            </footer>
        </div>
    );
}
