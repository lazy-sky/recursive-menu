import React, { useEffect, useState } from "react";

import { directoryTree, TreeNode } from '../api'
import MenuItem from './MenuItem';

import './sidebar.css'

const Sidebar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<TreeNode[]>([])

  useEffect(() => {
    setMenuItems(directoryTree?.children || [])
  }, [])

  if (menuItems.length === 0) {
    return (
      <div>No Directory</div>
    )
  }

  return <nav className="sidebar">
    <ol>
      {menuItems.map(item => 
        <MenuItem key={item.id} item={item} />
      )}
    </ol>
  </nav>;
};

export default Sidebar;
