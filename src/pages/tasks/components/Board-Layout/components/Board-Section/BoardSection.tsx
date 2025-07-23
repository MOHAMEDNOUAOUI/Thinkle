import React from 'react'
import './BoardSection.scss'
import BoardItem from '../Board-Item/BoardItem'
import { color } from 'framer-motion';


type props = {
    label: string;
    data?:any;
    color?: string;
}
function BoardSection({label , data , color}: props) {
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
                <BoardItem />
                <BoardItem />
        </div>
    </div>
  )
}

export default BoardSection