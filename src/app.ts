
import express, {Application, json} from 'express';
import router from './routes/urlShortner.routes';

const app: Application = express();

app.use(json());
app.use('/urlshortner', router)

export default app;