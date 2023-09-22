import { Request, Response, Router } from "express";
import validate from "../middlewares/validateResource";
import urlShortnerInputSchema from "../schemas/urlShortner.schema";
import {createShortenedUrlHandler, getShortenedUrlHandler} from "../controllers/urlShortner.controller";

const router = Router();

// Create a shortened url
router.post('/', validate(urlShortnerInputSchema),createShortenedUrlHandler)

// Get all the shortnend url
router.get('/', getShortenedUrlHandler)

// Delete a shortend url
router.delete('/', (req: Request, res: Response) => {
    
})




export default router;