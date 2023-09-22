import {object, string} from 'zod';

const urlShortnerInputSchema = object({
    body: object({
        fullUrl: string({
            required_error: 'url is required'
        }).trim().url('invalid url')
    })
})

export default urlShortnerInputSchema;