import React, { useState } from 'react'

import { TreeNode } from '../api'
import ArrowDownIcon from '../assets/icons/arrowDown.js'
import ArrowRightIcon from '../assets/icons/arrowRight.js'
import XIcon from '../assets/icons/x.js'

import './menuItem.css'

interface IMenuItemProps {
  item: TreeNode
}

const MenuItem = ({ item }: IMenuItemProps) => {
  const { type, name, children = [] } = item
  const [isOpen, setIsOpen] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)

  const handleArrowToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleXClick = () => {
    setIsDeleted(true)
  }

  if (isDeleted) return null

  if (type === 'folder') {
    return (
      <div className='menuItem'>
        <div className='folder'>
          <button type='button' onClick={handleArrowToggle} >
            {isOpen ? <ArrowDownIcon /> : <ArrowRightIcon />}
          </button>
          {item.name}
          <button type='button' onClick={handleXClick}>
            <XIcon />
          </button>
        </div>
        {isOpen && children.map(child => <MenuItem key={child.id} item={child} />)}
      </div>
    )
  }

  return (
    <div className='menuItem'>
      <div className='file'>
        {name}
        <button type='button' onClick={handleXClick}>
          <XIcon />
        </button>
      </div>
    </div>
  )
}

export default MenuItem