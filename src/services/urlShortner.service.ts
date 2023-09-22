import { Request, Response } from "express";
import UrlShortnerModel, { UrlShortnerInput } from "../models/urlShortner.model";


export async function createShortenedUrl(input: UrlShortnerInput) {
    try {
        const shortenedUrl = await UrlShortnerModel.create(input)
        return shortenedUrl;
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function getShortenedUrls() {
    try {
        const result = await UrlShortnerModel.find()
        return result
    } catch (error: any) {
        throw new Error(error.message)
    }
}