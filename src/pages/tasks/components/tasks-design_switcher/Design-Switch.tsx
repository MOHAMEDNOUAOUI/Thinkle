import './Design-Switch.scss'
import DesignSwitchItem from '../tasks-design_switcher-item/DesignSwitchItem'
import { TaskFilterItems } from '../../../../store/slices/taskFilter'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../../store'

const icons = ["pi-th-large", "pi-list", "pi-calendar", "pi-tag"]
function DesignSwitch() {
  const activePanel = useSelector((state : RootState) => state.tasksFilter.activepanel);
  const taskFilters = TaskFilterItems

  return (
    <div
       className='design-holder radial-gradient'>
        {
         Object.values(taskFilters).map((filter) => (
          <DesignSwitchItem
          key={filter}
          label={filter}
          isActive={filter == activePanel}
          icon={icons[Object.values(taskFilters).indexOf(filter)]}
        />
         ))
        }
    </div>
  )
}

export default DesignSwitch