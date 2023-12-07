import { Router, Request, Response } from "express";
const router = Router();

router.get("/dashboard", (req: Request, res: Response) => {
  res.send(200);
});

export default router;
