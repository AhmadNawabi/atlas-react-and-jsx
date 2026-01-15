import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export default function SocialLinks() {
    return (
        <div className="social-links">
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="LinkedIn" />
      </a>

      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="GitHub" />
      </a>
    </div>
    );
}
