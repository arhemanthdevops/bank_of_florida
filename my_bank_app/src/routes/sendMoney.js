const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    // Implementation for sending money
    // ...
    res.send('Money sent successfully!');
});

module.exports = router;
