var readlineSync = require("readline-sync")
score=0
console.log("Welcome to DBZ Quiz\n")
console.log("-------DISCLAIMER: This quiz is case sensitive---------\n")

if (readlineSync.keyInYN("Are You Ready To Play"))
{console.log("\n----------KAAAAA MEEEEE HAAAAA MEEEEE HAAAAAAAAAAA-------------")}
else
{console.log("\nGo Train :)")}




function test(question, answer)
{
  var uanswer = readlineSync.question(question)
  if (uanswer == answer)
  {
    console.log("you are right")
    score = score+1
    console.log(score)
  }
  else
  {
    console.log("you are wrong")
  }
}



var quiz = 
[
 {
   question: "Who has shortest height goku, krilin, picolo\n"
   ,answer: "krilin"
 },
 {
   question: "What does Dragon ball have stars, triangle, circle\n",
   answer: "stars"
 },
 {
   question: "Who train goku No one, master roshi, master kie\n",
   answer: "master roshi"
 },
 {
   question: "Goku Dress Colour white, black, orange\n",
   answer: "orange"
 },
 {
   question: "What is name of Goku's wife name chichi, bulma, yoshi\n",
   answer: "chichi"
 }
]


for (i=0; i<quiz.length; i++)
{
  console.log(test(quiz[i].question, quiz[i].answer))
}

console.log(" Your Final score is " + score + "\n")

console.log("Previos high scorer are: ")
var highscorer = ["love 5", "Berrus sama 4"]
for (i=0; i<highscorer.length; i++)
{
  console.log(highscorer[i])
}
console.log("\n********Take a screeshot of your score and message it to me I will update you name in the list********")