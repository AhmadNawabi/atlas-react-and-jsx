import day from "../assets/day.svg";
import evening from "../assets/evening.svg";
import night from "../assets/night.svg";

export default function Greeting() {
    const hour = new Date().getHours();

    let message = "";
    let image = "";

    if (hour >= 6 && hour < 12) {
        message = "Good Morning!";
        image = day;
    } else if (hour >= 12 && hour < 17) {
        message = "Good Afternoon!";
        image = day;
    } else if (hour >= 17 && hour < 21) {
        message = "Good Evening!";
        image = evening;
    } else {
        message = "Good Night!";
        image = night;
    }

    return (
        <h1 className="greeting">
            <img src={image} alt={message} />
            {message}
        </h1>
    );
}
