import React from "react";
import CountdownTimer from "./CountdownTimer";
import Logo from "../../assets/logo/mini_hackathon_logo.png";

const Countdown = () => {
	const isAwarenessSession = true;
	var myDate = "22-07-2022";
	myDate = myDate.split("-");
	var newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
	var month = newDate.toLocaleString("en-us", { month: "long" });
	var date = newDate.getDate();

	return (
		<div className="flex justify-center flex-col md:flex-row px-3.5 mt-10">
			<div className="flex justify-center items-center md:p-10">
				<img
					src={Logo}
					alt="Mini Hackathon Logo"
					className="min-w-0 max-w-lg md:max-w-lg"
				/>
			</div>

			<div className="justify-center items-center mt-0 md:mt-0 md:p-10">
				<div>
					<CountdownTimer
						countdownTimestampMs={newDate.getTime()}
						month={month}
						date={date}
					/>
				</div>
				<div className="text-center">
					{isAwarenessSession ? (
						<button className="mt-8 bg-white text-black border border-black hover:bg-gray-100 rounded lg:text-lg pl-4 pr-4 pt-1 pb-1 transition duration-0 hover:duration-500">
							📣 Tickets for Awareness Session
						</button>
					) : (
						<button className="mt-8 bg-white text-black border border-black hover:bg-gray-100 rounded lg:text-xl pl-5 pr-5 pt-2 pb-2 transition duration-0 hover:duration-500">
							✍🏼 Register Now
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Countdown;
