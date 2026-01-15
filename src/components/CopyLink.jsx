import copy from "../assets/copy.svg";

export default function CopyLink({ link }) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(link);
    };

    return (
        <img
            className="copy"
            src={copy}
            alt="Copy link"
            onClick={copyToClipboard}
        />
    );
}
