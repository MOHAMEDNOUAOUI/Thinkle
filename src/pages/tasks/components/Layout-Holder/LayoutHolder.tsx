import './LayoutHolder.scss'
import Boardlayout from '../Board-Layout/Boardlayout'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../../store'
import { TaskFilterItems } from '../../../../store/slices/taskFilter'
import ListLayout from '../List-layout/ListLayout'
import RoadmapLayout from '../Roadmap-Layout/RoadmapLayout'
import ProjectLayout from '../Project-Layout/ProjectLayout'


function LayoutHolder() {
  const activelayout = useSelector((state:RootState) => state.tasksFilter.activepanel)
  const Layouts = Object.values(TaskFilterItems)
  const activeLayout = Layouts.find(layout => layout === activelayout)




  const renderLayout = () => {
  switch (activeLayout) {
    case TaskFilterItems.Board:
      return <Boardlayout />;
    case TaskFilterItems.List:
      return <ListLayout />;
    case TaskFilterItems.Roadmap:
      return <RoadmapLayout />;
    case TaskFilterItems.Project:
      return <ProjectLayout />;
    default:
      return <div>Default Layout</div>;
  }
};

  return (
    <section className='layout-holder'>
      {
        renderLayout()
      }
    {/* additional components can be added here */}
    </section>
  )
}
export default LayoutHolder