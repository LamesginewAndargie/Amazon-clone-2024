import React from "react";
import classes from "./signup.module.css";
import { Link } from "react-router-dom";
function Auth() {
	return (
		<section className={classes.login}>
			{/* logo */}
			<Link>
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
						<input type="email" id="email" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
					</div>
					<button className={classes.login_signInButton}>Sign In</button>
				</form>
				{/* Agreement */}
				<p>
					By sign-in you agree to the AMAZONE FAKE CLONE conditions of Use &
					Sale. Please see our Privacy Notice, our Cookies Notice and our
					Internet-Based Ads Notice.
				</p>
				{/* Create account button */}
				<button className={classes.login_registerButton}>Create your Amazon Account</button>
			</div>
		</section>
	);
}

export default Auth;
