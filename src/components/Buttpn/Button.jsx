import React from 'react'

const Button = ({ onClick,
    width,
    height,
    bg,
    children,
    color,
    borderRadius,
}) => {
    return (
        <button className='btn'
        onClick={onClick}
            style={{
                width: width,
                height: height,
                backgroundColor: bg,
                color: color,
                borderRadius: borderRadius,
            }}>
            {children}
        </button>
  )
}

export default Button