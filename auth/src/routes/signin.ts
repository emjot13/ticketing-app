import express from "express";

const router = express.Router();

router.get('/api/users/signin', (req, res) => { 
    res.send("Hi current user")
});

export { router as signInRouter}