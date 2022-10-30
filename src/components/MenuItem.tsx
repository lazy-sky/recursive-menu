import React, { useState } from 'react'

import { TreeNode } from '../api'
import ArrowDownIcon from '../assets/icons/arrowDown.js'
import ArrowRightIcon from '../assets/icons/arrowRight.js'

import './menuItem.css'

interface IMenuItemProps {
  item: TreeNode
}

const MenuItem = ({ item }: IMenuItemProps) => {
  const { type, name, children = [] } = item
  const [isOpen, setIsOpen] = useState(false)

  const handleArrowToggle = () => {
    setIsOpen(prev => !prev)
  }

  if (type === 'folder') {
    return (
      <div className='menuItem'>
        <button type='button' onClick={handleArrowToggle} className='toggleBtn'>
          {isOpen ? <ArrowDownIcon /> : <ArrowRightIcon />}
          {item.name}
        </button>
        {isOpen && children.map(child => <MenuItem key={child.id} item={child} />)}
      </div>
    )
  }

  return <div className='menuItem'>{name}</div>
}

export default MenuItem