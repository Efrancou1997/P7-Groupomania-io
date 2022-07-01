// Formation OpenClassrooms - Développeur Web - Projet 7 
import { GET_USERS } from "../actions/users.actions";

const initialState = {};

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USERS:
			return action.payload;
		default:
			return state;
	}
}
