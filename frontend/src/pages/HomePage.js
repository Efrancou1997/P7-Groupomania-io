// Formation OpenClassrooms - Développeur Web - Projet 7 

import React, { useContext } from "react";
import { uIdContext } from "../components/AppContext";
import NewPostForm from "../components/post/NewPostForm";
import Thread from "../components/Thread";

const Home = () => {
	const { userId } = useContext(uIdContext);
	return (
		<div className="home">
			{userId ? (
				<div className="main">
					<div className="home-header">
						<NewPostForm />
					</div>
					<Thread />
				</div>) : (null)}
		</div>
	);
};

export default Home;
