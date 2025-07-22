
import React, { useEffect, useState } from 'react'
import './ShowPanel.css'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { useLocation } from 'react-router-dom'
import { setShowPanel, toggleShowPanel } from '../../store/slices/uiReducer'

function ShowPanel() {
    const dispatch = useDispatch();
  const isActive = useSelector((state:RootState) => state.ui.isShowPanelActive)
  const location = useLocation()

  useEffect(() => {
      const isActive = location.pathname != '/' && location.pathname != '/help' && location.pathname != '/about' && location.pathname != '/settings' && location.pathname != '/tasks'
      dispatch(setShowPanel(isActive))
  } , [location.pathname , dispatch])

  const [activePanel , setActivePanel] = useState(isActive);

   useEffect(() => {
    setActivePanel(isActive)
  }, [isActive])

  useEffect(() => {
    const root = document.documentElement;
    const panelWidth = getComputedStyle(root).getPropertyValue('--panel-width');
    const showPanelWidth = getComputedStyle(root).getPropertyValue('--show-panel-width');

    const isShowPanelActive = activePanel ? showPanelWidth : '0%';

   root.style.setProperty(
  '--layout-width',
  `calc(100% - (${panelWidth} + ${isShowPanelActive}))`
);

  },[activePanel])

  const changingShowPanelState = () =>  {
    dispatch(toggleShowPanel())
  }
  
  return (
    <div className={'show-panel ' + (activePanel ? 'active-panel' : 'disabled-panel')}>
        <div className="show-panel_toprow">
          <div className="top">
             <i className='pi pi-sort-alpha-down icon-hover'></i>
          <h4>All Notes</h4>
          <i className='pi pi-arrow-right-arrow-left icon-hover' onClick={changingShowPanelState}></i>
          </div>
          <div className="bottom">
            <input type="text"  name="" id="bottom_search" />
          </div>
        </div>
        <div className="show-pane_holder">
          <div className="card">
            <p>Test</p>
          </div>
           <div className="card">
            <p>Test</p>
          </div>
           <div className="card">
            <p>Test</p>
          </div>
           <div className="card">
            <p>Test</p>
          </div>
        </div>
    </div>
  )
}

export default ShowPanel