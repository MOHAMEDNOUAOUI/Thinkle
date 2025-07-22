import './DesignSwitchItem.scss'
import { useDispatch } from 'react-redux'
import { setFilterPanel, type TaskFilter } from '../../../../store/slices/taskFilter'

type props= {
  isActive?:boolean
  label:TaskFilter
  icon:string
}

function DesignSwitchItem({isActive , label ,icon} : props) {
  const dispatch = useDispatch();



  function changeActiveTab() {
    if(!isActive){
      dispatch(setFilterPanel(label))
    }
  }

  return (
    <div onClick={changeActiveTab} className={'design-switch-item ' + (isActive ? 'active' : '')}>
      <i className={'pi ' + icon}></i>
      <span>{label}</span>
    </div>
  )
}

export default DesignSwitchItem