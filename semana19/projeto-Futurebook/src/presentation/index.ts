import express from "express";
import { signUpEndpoint } from "./endpoints/user/signUp";
import { loginEndpoint } from "./endpoints/user/login";
import { requestFriendshipEndpoint } from "./endpoints/user/resquestFriendship";
import { deleteFriendshipEndpoint } from "./endpoints/user/deleteFriendship";
import { createPostEndpoint } from "./endpoints/posts/createPost";
import { getFeedForUserEndpoint } from "./endpoints/feeds/getFeedForUser";

const app = express();
app.use(express.json());

app.post('/signup', signUpEndpoint)
app.post('/login', loginEndpoint)

app.post('/user/friendshipReq', requestFriendshipEndpoint)
app.post('/user/deleteFriendship', deleteFriendshipEndpoint)

app.post('/post/creation', createPostEndpoint)

app.get('/feed', getFeedForUserEndpoint)

export default app;