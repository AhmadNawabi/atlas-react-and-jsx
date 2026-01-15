import OpenLink from "./Openlink";
import CopyLink from "./CopyLink";

export default function HelpfulResource({ link, label }) {
    return (
        <div className="helpful-resource">
            {label}
            <OpenLink link={link}/>
            <CopyLink link={link}/>
        </div>
    );
}
