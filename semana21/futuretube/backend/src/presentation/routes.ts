import express from "express";
import { signUpEndpoint } from "./endpoints/user/signUp";
import { loginEndpoint } from "./endpoints/user/login";
import { createVideoEndpoint } from "./endpoints/video/createVideo";

const app = express();
app.use(express.json());

app.post('/signup', signUpEndpoint)
app.post('/login', loginEndpoint)

app.post('/createvideo', createVideoEndpoint)


export default app;