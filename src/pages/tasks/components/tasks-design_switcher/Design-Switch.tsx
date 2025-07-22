import './Design-Switch.scss'
import DesignSwitchItem from '../tasks-design_switcher-item/DesignSwitchItem'
import { TaskFilterItems } from '../../../../store/slices/taskFilter'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../../store'

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
        />
         ))
        }
    </div>
  )
}

export default DesignSwitch