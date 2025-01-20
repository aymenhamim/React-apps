const express = require('express')

const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            name: 'the first request has been sent successfuly'
        }
    })
});
router.route('/:id').get().post().delete();

module.exports = router