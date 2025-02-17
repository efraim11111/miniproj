require("dotenv").config()
const router = require("express").Router()

const userRoutes=require("./userRoutes.routes")

router.use("/user", userRoutes)





// error handler
router.use((err, req, res, next) => {
    const errorObj = {};
    if (err.msg) errorObj.msg = err.msg;
    if (err.stack) errorObj.stack = err.stack;
    if (process.env.MODE == "production" || !Object.keys(errorObj).length) {
        return res.status(err.status ?? 500).send("there was an error")
    }
    res.status(err.status ?? 500).json(errorObj)
})


module.exports = router;