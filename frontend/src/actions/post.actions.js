// Formation OpenClassrooms - Développeur Web - Projet 7 

import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

export const getPosts = (num) => {
	return async (dispatch) => {
		try {
			const res = await axios({
				method: "GET",
				url: `post/`,
				headers: {
					authorization: `Bearer ${localStorage.getItem("Token")}`,
				},
			});
			const array = res.data.slice(0, num);
			dispatch({ type: GET_POSTS, payload: array });
		} catch (err) {
			if (err.response) {
				alert("Erreur lors de l'affichage des posts", err.response.data);
			}
		}
	};
};

export const addPost = (data) => {
	return async (dispatch) => {
		try {
			await axios({
				method: "POST",
				url: `post/`,
				headers: {
					authorization: `Bearer ${localStorage.getItem("Token")}`,
				},
				data,
			});
		} catch (err) {
			if (err.response) {
				alert("Image limitée à 1Mb ou format incompatible");
			}
		}
	};
};

export const updatePost = (id, content) => {
	return async (dispatch) => {
		try {
			await axios({
				method: "PUT",
				url: `post/${id}`,
				headers: {
					authorization: `Bearer ${localStorage.getItem("Token")}`,
				},
				data: { content, id },
			});
			dispatch({ type: UPDATE_POST, payload: { content, id } });
		} catch (err) {
			if (err.response) {
				alert("Erreur lors de la mise à jour", err.response.data);
			}
		}
	};
};

export const deletePost = (id, isAdmin) => {
	return async (dispatch) => {
		try {
			if (isAdmin) {
				await axios({
					method: "DELETE",
					url: `post/admin/${id}`,
					headers: {
						authorization: `Bearer ${localStorage.getItem("Token")}`,
					},
				});
			} else {
				await axios({
					method: "DELETE",
					url: `post/${id}`,
					headers: {
						authorization: `Bearer ${localStorage.getItem("Token")}`,
					},
				});
			}
			dispatch({ type: DELETE_POST, payload: { id } });
		} catch (err) {
			if (err.response) {
				alert("Erreur lors de la suppression", err.response.data);
			}
		}
	};
};
