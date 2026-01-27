
import './App.css'


function MyButton( {title }: {title: string} ) {
  return (
    <button>{title}</button>
  )
}

function App() {

 
 
  return (
    <div className="App">
     Welcome to  Medical RAG
      <MyButton title="Click Me"/>
    </div>

   
  )
}

export default App
