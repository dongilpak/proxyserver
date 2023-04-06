import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = 8000;

app.get('/result/:updateNum', async (req, res) => {
    const updateNum = req.params.updateNum;
    const resp = await fetch(
        `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${updateNum}`
    );

    const data = await resp.json();
    res.send(data);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
