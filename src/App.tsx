import { useSelector } from 'react-redux'
import './App.scss'
import ComponentLayout from './layouts/componentLayout'
import type { RootState } from './store'
import LoadingPage from './pages/LoadingPage/LoadingPage'

function App() {
  const appLoadingState = useSelector((state : RootState) => state.AppLoader.loading)

  return (
    <div className="App">
      {appLoadingState ? <LoadingPage /> :<ComponentLayout /> }
    </div>
  )
}

export default App
