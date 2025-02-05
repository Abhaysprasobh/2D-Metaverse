import {Router } from "express";

export const router = Router();

router.get("/Signup", (req, res) => {
    res.json(
        { "message": "Signup"}
    )
})

router.get("/Signin", (req, res) => {
    res.json(
        { "message": "Signin"}
    )
})