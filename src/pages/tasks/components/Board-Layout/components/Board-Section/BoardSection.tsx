import './BoardSection.scss'
import BoardItem from '../Board-Item/BoardItem'
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../../../store';
import type { Status } from '../../../../../../interfaces/task';
import { selectFilteredTasks } from '../../../../../../store/selectors/TasksSelector';


type props = {
    label: Status;
    // data?:Task[];
    color?: string;
}
function BoardSection({label , color}: props) {
    const Tasks = useSelector((state: RootState) => selectFilteredTasks(state, label));

  return (
    <div className='board-section'>
        <div className="board-section-topsection">
            <div className='board-section-topsection-title'>
                <div className="circle" style={{backgroundColor:color}}>
                    <div className="inside-circle"></div>
                </div>
                <p>{label}</p>
            </div>
            <div className='board-section-topsection-icons'>
                <i className='pi pi-ellipsis-h'></i>
                <i className='pi pi-plus'></i>
            </div>
        </div>
        <div className="board-section-holder">
            {
                Tasks && Tasks.length > 0 ? (
                    Tasks.map((item , index) => (
                        <BoardItem task={item} key={index}/>                
                    ))
                ) : (
                    <p>{Tasks.length}</p>
                )
            }
                
        </div>
    </div>
  )
}

export default BoardSection