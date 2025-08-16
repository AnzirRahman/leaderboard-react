// Hero.jsx
// Main hero section with welcome message and call-to-action buttons
import React from "react";
import { useNavigate } from "react-router-dom";
import welcomeToLeaderboard from "../assets/welcome-to-leaderboard.svg";
import heroImg from "../assets/hero-img.png";
import "../styles/global.css";
import isLoggedIn, { handleCheckNow } from "../common/isloggedin";
import useIsLoggedIn from "../common/isloggedin";

const Hero = () => {
	const navigate = useNavigate();
	const { loggedIn } = useIsLoggedIn();

	return (
		<div id="hero">
			<div className="section-container hero-container">
				<div className="hero-main">
					<div className="hero-title-img">
						<img
							className="hero-title"
							src={welcomeToLeaderboard}
							alt="Welcome to LeaderBoard"
						/>
						<img
							className="hero-img"
							src={heroImg}
							alt="Tons of throphies"
						/>
					</div>
					<p className="hero-text">
						Join the LeaderBoard community and track your progress with ease.
						Stay motivated and achieve your goals with our comprehensive
						tracking tools.
					</p>
				</div>
				<div className="hero-cta">
					<a
						href="#"
						className="hero-btn btn"
						onClick={handleCheckNow(navigate, loggedIn)}>
						Check Now
					</a>
					<a
						href="/#app"
						className="hero-btn btn btn-light">
						Get The App
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
