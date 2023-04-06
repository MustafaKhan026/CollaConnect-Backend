const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/User")


// Register
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        console.log('============error========================');
        console.log(err);
        console.log('==============error======================');
    }
})

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(400).json("Wrong credentials")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("Wrong credentials");
        const { password, ...others } = user._doc
        res.status(200).json(others)
    } catch (error) {
        console.error(error)
    }
})


module.exports = router


