import { useState } from 'react'
import group8 from "../../assets/Group8.png";
import Button from '../Buttpn/Button';
import Thank from '../Thank/Thank';
import Group15 from '../../assets/Group15.png'

export const Input = () => {

  const [cardNumber, setCardNumber] = useState('')
  const [CardHolderName, setCardHolderName] = useState('')
  const [data, setData] = useState('')
  const [years, setYears] = useState('')
  const [cvc, setCvc] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  
    return (
    <>
      <div className='container'>
        <div className='section' >
            <div className='bgimg'>
              <div className='backcard'>
                 <p className='backline'></p>
                 <div className='cvcdiv'>
                 <input className='cvcinput'
                     type='text'
                     placeholder='000'
                     value={cvc}
                     onChange={(e) => setCardNumber(e.target.value)}
                   />
                 </div>
                 <img className='lines' src={Group15} />
              </div>       
             <div className='ferstcard'>
                <img className="mastercard" src={group8} />       
                <input className='card_num'            
                   type='text'
                   placeholder='0000 0000 0000 0000'
                   value={cardNumber}
                   onChange={(e) => setCardNumber(e.target.value)}
                />
                <input className='cardholdername'
                   type='text'
                   placeholder='JANE APPLESEED'
                   value={CardHolderName}
                   onChange={(e) => setCardNumber(e.target.value)}
                />            
                <input className='deta'
                   type='text'  
                   placeholder='00 / '
                   value={data}
                   onChange={(e) => setCardNumber(e.target.value)}
                /> 
                <input className='year'
                   type='text'
                   placeholder='00'
                   value={years}
                   onChange={(e) => setCardNumber(e.target.value)}
                /> 
            </div>

            {!confirmed && (
            <div className='inputwritten'>   
               <div className='inputname'>
                 <p>CARDHOLDER NAME</p>
                 <input className='inputnamess'
                    type='text'         
                    value={CardHolderName}
                    onChange={(e) => setCardHolderName(e.target.value)}
                    placeholder='e.g. Jane Appleseed'
                 />          
               </div>  
      
               <div className='inputNum'>
                 <p>CARD NUMBER</p>
                 <input className='inputnumber'
                    type='text'
                    value={cardNumber.replace(/[^0-9.]/g, "") 
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}  
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder='e.g 123 456 789 0000'
                    maxLength={19}
                  /> 
                </div >
             <div className='inputdate'>
                <p>EXP. DATA   CVC (MM.YY)</p> 
                <input className='data'
                   type='text'
                   value={data}
                   onChange={(e) => setData(e.target.value)}
                   placeholder='MM'
                   maxLength={2}           
                />
                <input className='yearsinpit'
                   type={'text'}
                   value={years}
                   onChange={(e) => setYears(e.target.value)}
                   placeholder='YY'
                   maxLength={2}
                />
                <input className='cvcwrite'
                   type='text'
                   value={cvc}
                   onChange={(e) => setCvc(e.target.value)}
                   placeholder='e.g 123'
                   maxLength={3}
                />
                <Button
                  onClick={() => setConfirmed(true) }
                  width={329}
                  height={50}
                  bg={"#21092F"}
                  color={"white"}
                  borderRadius={5}
                >
                Confirm
                </Button>
                </div>
            </div> 
          )}
          {confirmed && <Thank setConfirmed={confirmed} />}
        </div>
       </div>     
     </div>  
    </>       
  )
}
export default Input



