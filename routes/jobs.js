const express = require('express'),
    router = express.Router(),
    got = require('got');

router.get('/', async (req, res) => {
    const { url } = req.query
    const jobsResultsData = await got(url);
    console.log(jobsResultsData)
    res.send(jobsResultsData.body)
})
module.exports = router;
