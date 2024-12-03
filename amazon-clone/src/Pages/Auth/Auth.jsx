import React, { useState, useContext } from "react";
import classes from "./signup.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	// console.log(password, email);
	const [{ user }, dispatch] = useContext(DataContext);
	console.log(user);

	const authHandler = async (e) => {
		e.preventDefault();
		console.log(e.target.name);
		if (e.target.name == "signIn") {
			signInWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					// console.log(userInfo);
					dispatch({
						type: Type.SET_USER,
						user: userInfo.user,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					// console.log(userInfo);
					dispatch({
						type: Type.SET_USER,
						user: userInfo.user,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<section className={classes.login}>
			{/* logo */}
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"
					alt="logo"
				/>
			</Link>
			{/* form */}
			<div className={classes.login_container}>
				<h1>Sign In</h1>
				<form action="">
					<div>
						<label htmlFor="email">Email</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							id="email"
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
						/>
					</div>
					<button
						type="submit"
						name="signIn"
						onClick={authHandler}
						className={classes.login_signInButton}
					>
						Sign In
					</button>
				</form>
				{/* Agreement */}
				<p>
					By sign-in you agree to the AMAZONE FAKE CLONE conditions of Use &
					Sale. Please see our Privacy Notice, our Cookies Notice and our
					Internet-Based Ads Notice.
				</p>
				{/* Create account button */}
				<button
					type="submit"
					name="signUp"
					onClick={authHandler}
					className={classes.login_registerButton}
				>
					Create your Amazon Account
				</button>
			</div>
		</section>
	);
}

export default Auth;
