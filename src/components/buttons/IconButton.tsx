import React, { ReactNode } from 'react'

const IconButtonStyles = () => {
  const main =
    'p-2.5 transition-colors duration-200 bg-blue-800 rounded-full bg-opacity-20 text-primary-400 backdrop-filter'
  const hover =
    'hover:text-primary-100 hover:bg-blue-700 hover:rounded-xl hover:bg-opacity-50)'
  const focus =
    'focus:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400'
  return main + hover + focus
}

export interface IconButtonProps {
  Icon: ReactNode
  srMessage?: String
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const IconButton: React.FC<IconButtonProps> = ({
  Icon,
  srMessage,
  onClick,
}) => {
  return (
    <button className={IconButtonStyles()} onClick={onClick}>
      <span className="sr-only">{srMessage}</span>
      <span className="text-2xl">{Icon}</span>
    </button>
  )
}

export default IconButton