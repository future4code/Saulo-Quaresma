import { Request, Response } from "express";
import { EditPostUC } from "../../../business/usecase/posts/editPost";
import { PostDB } from "../../../data/postDataBase";

export const editPostEndpoint = async (req: Request, res: Response) => {
  try {
    const editPostUC = new EditPostUC(new PostDB());
    const result = await editPostUC.execute({
      id: req.body.id,
      title: req.body.title,
      content: req.body.type,
      type: req.body.type,
      image: req.body.image
    });

    res.status(200).send(result)
  } catch (err) {
    res.status(401).send({
      message: err.message
    });
  }
};
