// Formation OpenClassrooms - Développeur Web - Projet 7 

import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const DELETE_USER = "DELETE_USER";

export const getUser = (userId) => {
	return async (dispatch) => {
		try {
			const res = await axios({
				method: "GET",
				url: `user/${userId}`,
				headers: {
					authorization: `Bearer ${localStorage.getItem("Token")}`,
				},
			});
			dispatch({ type: GET_USER, payload: res.data });
		} catch (err) {
			console.log("err axios", err);
		}
	};
};

export const uploadPicture = (data, userId) => {
	return async (dispatch) => {
		try {
			await axios({
				method: "PUT",
				url: `user/${userId}`,
				headers: {
					authorization: `Bearer ${localStorage.getItem("Token")}`,
				},
				data,
			});
			const res = await axios({
				method: "GET",
				url: `user/${userId}`,
				headers: {
					authorization: `Bearer ${localStorage.getItem("Token")}`,
				},
			});
			dispatch({ type: UPLOAD_PICTURE, payload: res.data.media });
		} catch (error) {
			console.log(error);
			if (error.response) {
				alert("erreur", error.response.data.message);
			}
			if (error.response.status === 401) {
				localStorage.clear();
				window.location.assign("/");;
			}
		}
	};
};

export const updateBio = (userId, bio) => {
	return async (dispatch) => {
		try {
			await axios({
				method: "PUT",
				url: `user/${userId}`,
				headers: {
					authorization: `Bearer ${localStorage.getItem("Token")}`,
				},
				data: { bio },
			});
			dispatch({ type: UPDATE_BIO, payload: bio });
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteUser = (id, isAdmin) => {
	return async (dispatch) => {
		try {
			if (isAdmin) {
				await axios({
					method: "DELETE",
					url: `user/admin/${id}`,
					headers: {
						authorization: `Bearer ${localStorage.getItem("Token")}`,
					},
				});
			} else {
				await axios({
					method: "DELETE",
					url: `user/${id}`,
					headers: {
						authorization: `Bearer ${localStorage.getItem("Token")}`,
					},
				});
			}
			dispatch({ type: DELETE_USER, payload: { id } });
		} catch (error) {
			console.log("error: ", error);
		}
	};
};
