import React from 'react'
import Group9 from '../Thank/Group9.png'

const Thank = ({setConfirmed}) => {
    return (
        <div className='thank'>
            <img className='imgthank' src={Group9} ></img>
            <h1>THANK YOU!</h1>
            <p>We’ve added your card details</p>
            <button className='thankbtn' onClick={() => setConfirmed(false)}
            >
            Continue
            </button>
        </div>
    );
}

export default Thank