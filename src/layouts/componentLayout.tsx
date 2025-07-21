import Panel from '../components/Panel/Panel'
import './componentLayout.css'
import ShowPanel from '../components/Show-Panel/ShowPanel'
import { useRoutes } from 'react-router-dom'
import { appRoutes } from '../routes'

function ComponentLayout() {
  const routesElements = useRoutes(appRoutes)


  return (
    <div className='component-layout'>
        <Panel />
        <ShowPanel/>
        <div className='component-layout__content glass'>
           {routesElements}
        </div>
    </div>
  )
}

export default ComponentLayout