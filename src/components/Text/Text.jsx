import React from 'react'

const Text = ({as: Tag = 'p', className='', children}) => {
  return <Tag className={className}>{children}</Tag>;
}

export default Text;