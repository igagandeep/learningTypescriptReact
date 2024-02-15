import './App.css'
import PersonList from './components/PersonList'
// import Greet from './components/Greet'
// import Person from './components/Person'

function App() {

  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]


  return (
    <div>
      <PersonList names={nameList} />
    </div>
  )
}

export default App


 // <Greet name="Guru" messageCount={10} />
    // <Person name={personName} />
   