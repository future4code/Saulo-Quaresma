import express from "express";
import { createProductEndpoint } from "./endpoints/createProduct";

const app = express();
app.use(express.json()); // Linha mágica (middleware)
app.post('/create', createProductEndpoint)

export default app;
