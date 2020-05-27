//This is my JavaScript code, this is where the questions are and how the images are pulled at the same time.

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const qImg = document.getElementById('qImg')
const answerButtonsElement = document.getElementById('answer-buttons')


//Below shows where the images are called in the code, they are hard coded in for each question.

var qOneImg = "001_USBSticks.jpg";

var qTwoImg = "002_DeviceSecurity.jpg";

var qThreeImg = "003_Tailgating.jpg";

var qFourImg = "004_Phishing.jpg";

var qFiveImg = "005_SocialEngineering.jpg";

var qSixImg = "006_Ransomware.jpg";

var qSevenImg = "007_PasswordComplexity.jpg";

var qEightImg = "008_SpecialCharacters.jpg";

var qNineImg = "009_VPNs.jpg";

var qTenImg = "010_CloudBackups.jpg";


//This shuffles the questions so that they can appear in a random order.
let shuffQues, currentQuesIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuesIndex++
  setNextQuestion()
})
//This will allow the clicked 'Next' button show the next question on click


function startGame() {
  startButton.classList.add('hide')
  shuffQues = questions.sort(() => Math.random() - .5)
  currentQuesIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQues(shuffQues[currentQuesIndex])
}


function showQues(question) {
  //questionElement.appendChild() = question.question;
  questionElement.innerText = question.question
  document.getElementById("qImg").src = question.ImagePath;
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

//function showQuestionImage(question) {
//  document.getElementById("qImg").src = question.ImagePath;
//}

//Above is my thinking about how to actually get the images to load up with the questions.


function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
//The function above clears the buttons from the previous questions.


function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffQues.length > currentQuesIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


//Below is the questions and answers, as you can see through the var qOneImg and others, the images are put below the Question title.
//An array is used for the questions
const questions = [
  {
    question: 'External Drive Security',
    ImagePath: qOneImg,
    answers: [
      { text: 'Hand it into your works IT Department for them to scan it to make sure it is safe', correct: true },
      { text: 'Take it home and plug it into your computer', correct: false },
      { text: 'Plug it straight into your work computer once you arrive at your desk', correct: false }
    ]
  },
//The questions are written out using the by the 'text' parameter and are also chosen to be correct or wrong using true or false values.

  {
    question: 'Device Security',
    ImagePath: qTwoImg,
    answers: [
      { text: 'Inform the IT Department that your laptop has gone missing so that they can help you', correct: true },
      { text: 'Not say anything and just go about your day', correct: false },
      { text: 'Ask around town if anyone has seen your laptop', correct: false }
    ]
  },

  {
    question: 'Tailgating',
    ImagePath: qThreeImg,
    answers: [
      { text: 'Invite them into the office and leave them unattended', correct: false },
      { text: 'Show they to the reception and get them checked in', correct: true },
      { text: 'Open the door with your ID and let them in', correct: false }
    ]
  },

  {
    question: 'Email Security',
    ImagePath: qFourImg,
    answers: [
      { text: 'Click the link and login to your account', correct: false },
      { text: 'Take screenshots of the email and show the IT Department', correct: true },
      { text: 'Email the account back asking about it', correct: false },
      { text: 'Forward to your work colleagues to see if they have the same email too', correct: false }
    ]
  },

  {
      question: 'Social Engineering',
      ImagePath: qFiveImg,
      answers: [
          { text: 'Tell them your username and password, the weekend cannot wait!', correct: false },
          { text: 'Ignore the phone call and inform the IT Department someone was after your details', correct: true },
          { text: 'Hang up', correct: true }
      ]
  },

  {
    question: 'Email Security',
    ImagePath: qSixImg,
    answers: [
      { text: 'Download and open the file straight away, you need a new car!', correct: false },
      { text: 'Delete the email, it is SPAM', correct: true },
      { text: 'Brag about your new car online', correct: false },
      { text: 'Forward the email to your friends as they might want a new car too', correct: false }
    ]
  },

  {
    question: 'Password Complexity',
    ImagePath: qSevenImg,
    answers: [
      { text: 'iloveyou', correct: false },
      { text: 'password123', correct: false },
      { text: 'L0ngD@t086', correct: true },
      { text: 'qwertyuiop', correct: false }
    ]
  },

  {
    question: 'Passwords & Special Characters',
    ImagePath: qEightImg,
    answers: [
      { text: 'P@ssw0rd', correct: false },
      { text: 'D0g@H0me', correct: true },
      { text: 'QWeRT09', correct: false },
      { text: 'N3wt@n_il89', correct: true }
    ]
  },

  {
    question: 'VPNs',
    ImagePath: qNineImg,
    answers: [
      { text: 'Use a VPN while shopping online so that your connection is secure', correct: true },
      { text: 'Go on your bank and buy things', correct: false },
      { text: 'Enter your password into Facebook and browse the Newsfeed', correct: false }
    ]
  },

  {
    question: 'Backups',
    ImagePath: qTenImg,
    answers: [
      { text: 'Print out all your work and leave it on your desk', correct: false },
      { text: 'Save a copy to the cloud so that you have multiple copies', correct: true },
      { text: 'Email all your work from your work email to your home email address', correct: false }
    ]
  }
]

//There are only ten questions but more could be added.