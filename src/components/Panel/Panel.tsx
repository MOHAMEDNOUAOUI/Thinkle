import React, { useEffect, useState } from 'react'
import './Panel.css'
import type { PanelItems, PanelResponse } from '../../interfaces/panel';
import PanelHeader from './panelHeader';
import PanelBody from './panelBody';
import PanelFooter from './panelFooter';

function Panel() {


  return (
    <div className='panel glass'>
      {/*<PanelHeader />*/ }
      <PanelBody />
      <PanelFooter />
    </div>
  )
}

export default Panel