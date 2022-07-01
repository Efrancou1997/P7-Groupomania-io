// Formation OpenClassrooms - Développeur Web - Projet 7 

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import App from "./App";
import "./styles/index.scss";
import axios from "axios";

//devtools
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);

axios.defaults.baseURL = 'http://localhost:4200';

// store.dispatch(getUsers());
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);
