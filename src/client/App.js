import "../../assets/css/style.css";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { withApollo } from "@apollo/client/react/hoc";
import "cropperjs/dist/cropper.css";
import { useCurrentUserQuery } from "./apollo/queries/currentUserQuery";
import "./components/fontawesome";
import Loading from "./components/loading";
import Router from "./router";
import 'react-toastify/dist/ReactToastify.css';

const App = ({ client }) => {
	const [loggedIn, setLoggedIn] = useState(
		typeof window.__APOLLO_STATE__ !== typeof undefined &&
			typeof window.__APOLLO_STATE__.ROOT_QUERY !== typeof undefined &&
			typeof window.__APOLLO_STATE__.ROOT_QUERY.currentUser !== typeof undefined
	);

	const { data, loading, error, refetch } = useCurrentUserQuery();

	const handleLogin = (status) => {
		refetch()
			.then(() => {
				setLoggedIn(status);
			})
			.catch(() => {
				setLoggedIn(status);
			});
	};

	useEffect(() => {
		const subscribe = client.onClearStore(() => {
			if (loggedIn) {
				setLoggedIn(false);
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	if (loading) {
		return <Loading />;
	}
	return (
		<div className="container">
			<Helmet>
				<title>Graphbook - Feed</title>
				<meta
					name="description"
					content="News of all your friends on Graphbook"
				/>
			</Helmet>
			<Router loggedIn={loggedIn} changeLoginState={handleLogin} />
		</div>
	);
};

export default withApollo(App);
