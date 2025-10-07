import routs from './Routs/routs'
import './App.css'

import { useRoutes} from 'react-router-dom'
function App() {

let router = useRoutes(routs)

  return (
    <>
     {router}
    </>
  )
}

export default App
