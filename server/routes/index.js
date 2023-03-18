const Controller = require('../controllers')
const {upload} = require('../middlewares/multer')
const router = require('express').Router()


router.get('/customer',Controller.showAllCustomer)
router.post('/customer', upload.single("image"),Controller.createCustomer)
router.post('/item',upload.single("image"),Controller.createItem)
router.get('/item',Controller.showAllItem)
router.post('/sale',Controller.createSale)
router.get('/sale',Controller.showAllSale)


module.exports=router