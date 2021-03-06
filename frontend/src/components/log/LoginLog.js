// Formation OpenClassrooms - Développeur Web - Projet 7

import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const LoginLog = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// let navigate=useNavigate()

	const handleLogin = (e) => {
		e.preventDefault();
		const emailError = document.querySelector(".email.error");
		const passwordError = document.querySelector(".password.error");
		emailError.innerHTML = "";
		passwordError.innerHTML = "";

		axios({
			method: "POST",
			url: `user/login`,
			withCredentials: false,
			data: {
				email,
				password,
			},
		})
			.then((res) => {
				localStorage.setItem("Token", res.data.token);
				localStorage.setItem("Id", res.data.id);
				localStorage.setItem("IsAdmin", res.data.isAdmin);
				window.location.assign("/")
				// navigate("/", {replace: true});
			})
			.catch((err) => {
				const errData = err.response.data;
				if (errData.errorMail) {
					emailError.innerHTML = err.response.data.errorMail;
				}
				if (errData.errorPassword) {
					passwordError.innerHTML = err.response.data.errorPassword;
				} else {
					console.log(err);
				}
			});
	};

	return (
		<form action="" onSubmit={handleLogin} id="sign-up-form">
			<label htmlFor="email">Email</label>
			<br />
			<input
				type="email"
				name="email"
				id="email"
				required
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				placeholder="Email..."
			/>
			<div className="email error"></div>
			<br />
			<label htmlFor="password">Mot de passe</label>
			<br />
			<input
				type="password"
				name="password"
				id="password"
				required
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				placeholder="Mot de passe..."
			/>
			<div className="password error"></div>
			<br />
			<input type="submit" value="Se connecter" />
		</form>
	);
};

export default LoginLog;
