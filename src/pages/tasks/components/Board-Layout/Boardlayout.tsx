import './Boardlayout.scss'
import BoardSection from './components/Board-Section/BoardSection'
import { Status } from '../../../../interfaces/task'



function Boardlayout() {

  const statusLabels = Status;
  const colors = ["#f0f0f0" , "#d0e6ff" , "#ffe0b3" , "#c8e6c9"]

  return (
    <div className='board-layout'>
      {Object.values(statusLabels).map((label, index) => (
        <BoardSection key={index} label={label} color={colors[index % colors.length]} />
      ))}
    </div>
  )
}

export default Boardlayout