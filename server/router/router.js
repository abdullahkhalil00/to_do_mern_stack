const express = require('express')
const  router = express.Router()
const {handleUser , handleAllUser , handleUpdateUser , handleSubmitUpdateData ,deleteUser } = require("../controller/controller")

router.post('/createUser' , handleUser)
router.get('/getuser' ,handleAllUser )
router.get("/update/:id" , handleUpdateUser )
router.put("/update/:id" , handleSubmitUpdateData)
router.delete("/delete/:id" , deleteUser )
module.exports = router