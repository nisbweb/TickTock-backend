const express = require("express")
const answers = require("../../answers.json")
const router = express.Router()

router.get("/", (req, res) => {
  return res.json({
    success: false,
    message: "You have reached the API 🎉"
  })
})

router.post("/", (req, res) => {
  const question = answers.find((element) => {
    return element.question === req.body.question
  })
  if(!question){
    return res.status(400).json({
      success: false,
      error: "Invalid question"
    })
  }
  if(question.answer === req.body.answer) {
    return res.status(200).json({
      success: true
    })
  } else {
    return res.status(200).json({
      success: false,
      error: "Wrong answer."
    })
  }
})

module.exports = router
