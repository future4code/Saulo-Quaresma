import express from "express";
import { signUpEndpoint } from "./endpoints/user/signUp";
import { loginEndpoint } from "./endpoints/user/login";
import { createVideoEndpoint } from "./endpoints/video/createVideo";
import { getAllVideosEndPoint } from "./endpoints/video/getAllVideos";
import { getUserVideosEndPoint } from "./endpoints/video/getUserVideos";
import { changeVideoInfosEndPoint } from "./endpoints/video/changeVideoInfos";
import { deleteVideoEndPoint } from "./endpoints/video/deleteVideo";
import { getAllVideoInfosEndpoint } from "./endpoints/video/getAllVideoInfos";

const app = express();
app.use(express.json());

app.post('/signup', signUpEndpoint)
app.post('/login', loginEndpoint)

app.post('/createvideo', createVideoEndpoint)
app.get('/videos', getAllVideosEndPoint)
app.get('/user/videos/', getUserVideosEndPoint)
app.post('/video/changeInfos', changeVideoInfosEndPoint)
app.delete('/video/delete/:id', deleteVideoEndPoint)
app.get('/videos/', getAllVideoInfosEndpoint)

export default app;