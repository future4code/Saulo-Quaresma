import express, { Request, Response } from "express";
import { createBandEndpoint } from "./endpoints/bands/createBand";
import { getBandInfoEndpoint } from "./endpoints/bands/getBandInfo";
import { createShowEndpoint } from "./endpoints/shows/createShow";
import { getShowsByDayEndpoint } from "./endpoints/shows/getShowsByDay";

const app = express();
app.use(express.json()); // Linha mágica (middleware)
app.post('/createband', createBandEndpoint)
app.get('/getinfo', getBandInfoEndpoint)
app.post('/createshow', createShowEndpoint)
app.get('/shows', getShowsByDayEndpoint)

export default app;
