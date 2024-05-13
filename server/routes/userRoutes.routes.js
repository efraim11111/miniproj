const router = require("express").Router()
const {register, login, getUserInfo, logout}=require("../controllers/userController")
const { auth, authadmin } = require("../middlewares/auth")

// register new user
router.post("/register", register)

router.post("/login",login)
router.post("/logout",logout)
router.post("/authUser",auth,getUserInfo)


module.exports=router;