import React from "react"
import { withRouter } from "react-router-dom"

const Home = ({ history }) => {
	const goHome = () => {
		history.push("/app")
	}

	return (
		<div className="goHome" onClick={goHome}>Home</div>
	)
}

export default withRouter(Home)