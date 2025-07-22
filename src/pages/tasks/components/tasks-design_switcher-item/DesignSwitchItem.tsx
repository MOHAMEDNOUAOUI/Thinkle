import './DesignSwitchItem.scss'
import { useDispatch } from 'react-redux'
import { setFilterPanel, type TaskFilter } from '../../../../store/slices/taskFilter'

type props= {
  isActive?:boolean
  label:TaskFilter
}

function DesignSwitchItem({isActive , label} : props) {
  const dispatch = useDispatch();



  function changeActiveTab() {
    if(!isActive){
      dispatch(setFilterPanel(label))
    }
  }

  return (
    <div onClick={changeActiveTab} className={'design-switch-item ' + (isActive ? 'active' : '')}>
      {label}
    </div>
  )
}

export default DesignSwitchItem