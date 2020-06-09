import { Router } from "express";
import { sign } from 'jsonwebtoken';

const router: Router = Router();

router.get("/login", (req, res, next) => {
    const { username, password } = req.body;
    console.log(username, password, process.env.AUTH_USER!, process.env.AUTH_PASS!)
    if (username === process.env.AUTH_USER! && password === process.env.AUTH_PASS!) {
        res.send(sign(process.env.AUTH_PAYLOAD!, process.env.JWT_SECRET!, {}));
    } else {
        res.sendStatus(400);
    }
});

export default router;