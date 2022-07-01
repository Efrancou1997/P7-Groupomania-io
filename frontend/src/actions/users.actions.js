// Formation OpenClassrooms - Développeur Web - Projet 7 

import axios from "axios";

export const GET_USERS = "GET_USERS";

export const getUsers = () => {
	return async (dispatch) => {
		try {
			const res = await axios({
				method: "GET",
				url: `user/`,
				headers: {
					authorization: `Bearer ${localStorage.getItem("Token")}`,
				},
			});
			dispatch({ type: GET_USERS, payload: res.data });
		} catch (err) {
			console.log("err axios users", err);
		}
	};
};
