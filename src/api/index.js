const express = require("express")
const techAnswers = require("../../tech-answers.json")
const nonTechAnswers = require("../../non-tech-answers.json")
const router = express.Router()
const middlewares = require("../middlewares")
const admin = require("firebase-admin")
// const db = require("../db")


router.get("/", middlewares.auth, async (req, res) => {
  return res.json({
    success: true,
    submission: false,
    message: "You have reached the API 🎉"
  })
})

router.post("/tech", middlewares.auth, async (req, res, next) => {
  const question = techAnswers.find((element) => {
    return element.question === req.body.question
  })
  if(!question){
    next(new Error("Invalid question number"))
  }
  if(question.answer === req.body.answer) {
    try{
      await req.user.update({
        solvedTech: admin.firestore.FieldValue.arrayUnion(req.body.question)
      })
    } catch(err) {
      console.error(err)
      res.statusCode = 500
      next(err)
    }
    return res.status(200).json({
      success: true,
      submission: true
    })
  } else {
    return res.status(200).json({
      success: true,
      submission: false,
      message: "Wrong answer."
    })
  }
})


router.post("/nontech", middlewares.auth, async (req, res, next) => {
  const question = nonTechAnswers.find((element) => {
    return element.question === req.body.question
  })
  if(!question){
    next(new Error("Invalid question number"))
  }
  if(question.answer === req.body.answer) {
    try{
      await req.user.update({
        solvedNonTech: admin.firestore.FieldValue.arrayUnion(req.body.question)
      })
    } catch(err) {
      console.error(err)
      res.statusCode = 500
      next(err)
    }
    return res.status(200).json({
      success: true,
      submission: true
    })
  } else {
    return res.status(200).json({
      success: false,
      submission: false,
      message: "Wrong answer."
    })
  }
})

module.exports = router
