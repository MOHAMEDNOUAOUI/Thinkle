import React from 'react'
import './Panel.scss'

function PanelFooter() {
  return (
   <div className='panel-footer'>
        <h2 id='user-name'>Mohamed Nouaoui <span><i className='pi pi-sort-down-fill'></i></span></h2>
        <p id='user-signed-time'>signed at 09:35:40</p>
    </div>
  )
}

export default PanelFooter