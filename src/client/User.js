import React from 'react'
import UserProfile from "./components/user"
import Chats from "./Chats"
import Bar from "./components/bar"

const User = ({ changeLoginState, match }) => {
	return (
		<>
			<Bar changeLoginState={changeLoginState} />	
			<UserProfile username={match.params.username}/>
			<Chats />
		</>
	)
}

export default User