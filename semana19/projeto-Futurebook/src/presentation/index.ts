import express from "express";
import { signUpEndpoint } from "./user/signUp";
import { loginEndpoint } from "./user/login";
import { requestFriendshipEndpoint } from "./user/resquestFriendship";
import { deleteFriendshipEndpoint } from "./user/deleteFriendship";

const app = express();
app.use(express.json());

app.post('/signup', signUpEndpoint)
app.post('/login', loginEndpoint)
app.post('/user/friendshipReq', requestFriendshipEndpoint)
app.post('/user/deleteFriendship', deleteFriendshipEndpoint)

export default app;