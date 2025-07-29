import './LayoutHolder.scss'
import Boardlayout from '../Board-Layout/Boardlayout'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../../store'
import { TaskFilterItems } from '../../../../store/slices/taskFilter'
import ListLayout from '../List-layout/ListLayout'
import RoadmapLayout from '../Roadmap-Layout/RoadmapLayout'
import ProjectLayout from '../Project-Layout/ProjectLayout'
import { useEffect } from 'react'
import { setAll } from '../../../../store/slices/TasksData'



function LayoutHolder() {
  const activelayout = useSelector((state:RootState) => state.tasksFilter.activepanel)
  const Layouts = Object.values(TaskFilterItems)
  const activeLayout = Layouts.find(layout => layout === activelayout)
  const dispatch= useDispatch()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3003/tasks/list');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        dispatch(setAll({loading:false , data:result.data , error:result.error}))
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };
    fetchData();
  } , []);


  


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