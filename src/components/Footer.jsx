import links from "../assets/links.json";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <ul>
                {links.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} target="_blank" rel="noreferrer">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div>© {currentYear} Atlas School</div>
        </footer>
    );
}
