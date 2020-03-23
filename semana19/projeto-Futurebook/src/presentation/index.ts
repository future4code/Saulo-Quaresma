import express from "express";
import { signUpEndpoint } from "./user/signUp";
import { loginEndpoint } from "./user/login";

const app = express();
app.use(express.json());

app.post('/signup', signUpEndpoint)
app.post('/login', loginEndpoint)

export default app;