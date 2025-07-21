import React from 'react'
import type { PanelItems } from '../../interfaces/panel'
import './Panel.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { setShowPanel} from '../../store/slices/uiReducer'

type Props =  {
    item:PanelItems,
    length?: number
    path:string
}

function PanelItem({item , length  , path}:Props) {
  const dispatch = useDispatch()
  const ShowPanelState = useSelector((state:RootState) => state.ui.isShowPanelActive)

  const toggleShowPanelUI = () => {
    console.log(ShowPanelState);
    if(!ShowPanelState){
      dispatch(setShowPanel(true))
    }
  }


   return (
    <li>
      <NavLink onClick={toggleShowPanelUI}
        to={path}
        end // optional: ensures exact path match
        className={({ isActive }) =>
          `panel-item ${isActive ? 'active' : ''}`
        }
      >
        <div className="panel-item-left">
          {item.icon && <i className={'panel-icon pi ' + item.icon}></i>}
          <span className="panel-title">{item.title}</span>
        </div>
        <p className="length-holder">{length}</p>
      </NavLink>
    </li>
  );
}

export default PanelItem