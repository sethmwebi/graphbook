const typeDefinitions = `	
	directive @auth on QUERY | FIELD_DEFINITION | FIELD
	scalar Upload

	type File {
		filename: String!
		mimeType: String!
		encoding: String!
		url: String!
	}

	type User {
		id: Int
		avatar: String
		username: String
	}

	type Post {
		id: Int
		text: String
		user: User
	}

	type Message {
		id: Int
		text: String
		chat: Chat
		user: User
	}

	type Chat {
		id: Int
		messages: [Message]
		users: [User]
		lastMessage: Message
	}

	type PostFeed {
		posts: [Post]
	}

	type Response {
		success: Boolean
	}

	type UsersSearch {
		users: [User]
	}

	type Auth {
		token: String
	}

	input PostInput {
		text: String!
	}

	input UserInput {
		username: String!
		avatar: String!
	}

	input ChatInput {
		users: [Int]
	}

	input MessageInput {
		text: String!
		chatId: Int!
	}

	type RootMutation {
		addPost(
			post: PostInput!
		): Post
		addChat(
			chat: ChatInput!
		): Chat
		addMessage(
			message: MessageInput!
		): Message
		deletePost(
			postId: Int!
		): Response
		login(
			email: String!
			password: String!
		): Auth
		signup(
			username: String!
			email: String!
			password: String!
		): Auth
		uploadAvatar(
			file: Upload!
		): File @auth
		logout: Response @auth
	}

	type RootQuery {
		currentUser: User @auth
		posts: [Post]
		chats: [Chat] @auth
		chat(chatId: Int): Chat
		user(username: String!): User @auth
		postsFeed(page: Int, limit: Int, username: String): PostFeed @auth
		usersSearch(page: Int, limit: Int, text: String!): UsersSearch
	}

	type RootSubscription {
		messageAdded: Message
	}

	schema {
		query: RootQuery
		mutation: RootMutation
		subscription: RootSubscription
	}
`;

export default [typeDefinitions];
