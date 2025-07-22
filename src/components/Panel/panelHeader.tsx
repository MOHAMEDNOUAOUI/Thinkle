import React from 'react'
import './Panel.scss'

function PanelHeader() {
  return (
     <div className='panel-header'>
        <div className='panel-header-logo-container'>
          {/* <h2 className='panel-header-title'>Thinkle.</h2> */}
          <img src="/logosecond2.png" className='panel-header-logo' alt="" />
        </div>
        {/* <i className='pi pi-cog icon-hover'></i> */}
      </div>
  )
}

export default PanelHeader