import {Schema, model} from 'mongoose';
import { nanoid } from 'nanoid';

export interface UrlShortnerInput {
    fullUrl: string
}

const urlShortnerSchema: Schema = new Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: nanoid()
    }
}, {
    timestamps: true
})

const UrlShortnerModel = model('UrlShortner', urlShortnerSchema)

export default UrlShortnerModel;