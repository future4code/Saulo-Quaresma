import { Request, Response } from "express";
import { VideoDB } from "../../../data/videoDatabase";
import { GetAllVideosUC } from "../../../business/usecases/videos/getAllVideos";

export const getAllVideosEndPoint = async (req: Request, res: Response) => {
    try {
        const getAllVideosUC = new GetAllVideosUC(new VideoDB())

        const input = {
            page: Number(req.query.page)
        }

        const result = await getAllVideosUC.execute(input)

        res.status(200).send(result)
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
}