import React, { useEffect, useState } from 'react'
import type { PanelItems, PanelResponse } from '../../interfaces/panel';
import PanelItem from './panelItem';

function PanelBody() {

  const [navigationItems, setNavigationItems] = useState<PanelItems[]>([]);

  useEffect(() => {
    const fetchPanelItems = async () => {
      try {
        const response = await fetch('/panel/panel.json');
        const jsonData: PanelResponse = await response.json();
        console.log(jsonData)
        setNavigationItems(jsonData.panel);
      } catch (error) {
        console.error('Failed to fetch panel items:', error);
      }
    };
    fetchPanelItems();
  }, []);


  return (
      <div className='panel-content'>
        <ul className='panel-item-holder'>
          {navigationItems.map((item, index) => (
            <PanelItem path={item.path} length={item.lengthItem} key={index} item={item}/>
          ))}
        </ul>
      </div>
  )
}

export default PanelBody