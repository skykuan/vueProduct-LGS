const router = require('express').Router();
const axios = require('axios').default;
const https = require('https');

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

router.post('/', async (req, res) => {
  const result = await instance.get(req.body.url);
  res.send(result.data);
});

module.exports = router;
