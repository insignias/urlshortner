import app from "./app";
import config from 'config';
import connect from "./utils/connect";

const port = config.get<number>('port');

app.listen(port, async () => {
    console.log(`Server listening at port ${port}`)
    await connect()
})
