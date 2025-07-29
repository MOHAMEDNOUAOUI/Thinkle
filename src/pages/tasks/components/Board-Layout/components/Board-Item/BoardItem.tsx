import type { Task } from '../../../../../../interfaces/task'
import './BoardItem.scss'

type props = {
  task:Task
}
function BoardItem({task} : props) {

  return (
    <div className='board-item'>
        <div className='board-item-header'>
            <div className="board-item-left">
              <h3 className='board-item-title'>{task.label}</h3>
              {task.tags && task.tags.length > 2 ? (
                task.tags.map((tag , index) => (
                  <p key={index}>{tag.label}</p>
                ))
              ) : ''}
            </div>
            <div className='board-item-right'></div>
        </div>
        <div className="board-item-body">
          <div className='board-item-body_text'>
            <div className="user-profile"></div>
            <p className='Status'>{task.status}</p>
          </div>
            <div className="progressBar">
              <div className='progressBar-inside' style={{width:'50%'}}></div>
            </div>
            <div className='board-item-body-sousText'>
              <p className='description'>{task.description}{task.description}</p>
              <p className='percentage'>75%</p>
            </div>
        </div>
    </div>
  )
}

export default BoardItem