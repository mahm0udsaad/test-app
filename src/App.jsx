import './App.css'
import TestPage from './components/testPage'

function App() {
  const questions = [
    {
      text: 'What is the capital of France?',
      options: ['Berlin', 'London', 'Paris', 'Rome'],
      correctOption: 'Paris',
    },
    {
      text: 'Which planet is known as the "Red Planet"?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctOption: 'Mars',
    },
    {
      text: 'Which famous scientist developed the theory of general relativity?',
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
      correctOption: 'Albert Einstein',
    },
  ];
  

  return (
    <>
      <TestPage questions={questions}/>
    </>
  )
}

export default App
