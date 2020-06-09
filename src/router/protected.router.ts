import { Router } from "express";
import { decode, verify } from 'jsonwebtoken';

const router: Router = Router();

router.use((req, res, next) => {
    try {
        const decodedJwt = verify(req.headers.authorization!, process.env.JWT_SECRET!, {});

        console.log('decodedJwt', decodedJwt);
        next();
    } catch (error) {
        res.sendStatus(401);
    }
})

router.get("/protected", (req, res, next) => {
    res.sendStatus(200);
});

export default router;