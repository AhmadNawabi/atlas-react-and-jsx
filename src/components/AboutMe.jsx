import profile from "../assets/profile.jpg";

export default function AboutMe() {
    return (
        <div className="about-me">
            <img src={profile} alt="Profile picture" />
            
            <p>
                My name is Ahmad Nawabi. I am a full-stack web development student at
        Atlas School, currently in my 5th trimester of the program. I enjoy working
        with JavaScript, React, and building clean, responsive user interfaces.
        After graduating, I want to work as a professional software developer
        and continue growing my skills in modern web technologies. Outside of
        school, I enjoy training in MMA, practicing jiu-jitsu and wrestling,
        staying active, and learning new technical skills.
            </p>
        </div>
    );
}