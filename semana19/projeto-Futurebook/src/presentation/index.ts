import express from "express";
import { signUpEndpoint } from "./user/signUp";

const app = express();
app.use(express.json());

app.post('/signup', signUpEndpoint)

export default app;