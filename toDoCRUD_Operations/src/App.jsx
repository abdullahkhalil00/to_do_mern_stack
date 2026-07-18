import {BrowserRouter , Route , Routes} from 'react-router-dom'
import './App.css'
import CreateUser from './component/createUser'
import User from './component/User'
import UpdateUser from './component/updateUser'
function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>

        <Route path='/' element = {<User/>} ></Route>
        <Route path='/create' element = {<CreateUser/>} ></Route>
        <Route path='/update/:id' element = {<UpdateUser/>} ></Route>



      </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
