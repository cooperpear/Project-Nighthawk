import React from 'react'

const layoutStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    letterSpacing:  '15px',
    wordSpacing: '20px',
    color: '#FFFFFF',
    fontWeight: 700,
    textDecoration: 'none',
    fontStyle: 'normal',
    textTransform: 'uppercase',
  } 

function Footer() {
    return (
        <div style={layoutStyle} className="fixed-bottom bg-dark text-white text-center pt-3 pt-6">
            <p className="pt-6">project Nighthawk</p>
        </div>
    )
}

export default Footer
