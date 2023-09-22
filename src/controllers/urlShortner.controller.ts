import { Request, Response } from "express";
import { createShortenedUrl, getShortenedUrls } from "../services/urlShortner.service";


export async function createShortenedUrlHandler(req: Request, res: Response) {
    try {
        const result = await createShortenedUrl(req.body)
        res.send(result)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}

export async function getShortenedUrlHandler(req: Request, res: Response) {
    try {
        const result = await getShortenedUrls()
        res.send(result)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}

