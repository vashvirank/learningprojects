import React from 'react'
import ButtonContainer from './ButtonContainer'
import styles from './Container.module.css'
import Display from './Display';
import { useState } from 'react'

const Container = () => {

  const [calVal, setCalVal] = useState('');
  const onButtonClick = (buttonText) => {
    if(buttonText === 'AC'){
      const newDisplayValue = ''
      setCalVal(newDisplayValue)
    } 
    else if(buttonText === '<-'){
      const newDisplayValue = String(calVal).slice(0, -1)
      setCalVal(newDisplayValue)
    } 
    else if(buttonText === '='){
      const result = eval(calVal)
      setCalVal(result)
    } 
    else {
      const newDisplayValue = calVal + buttonText
      setCalVal(newDisplayValue)
    }

  }  

  return (
    <div className={styles.calculator}>
        <Display calVal={calVal}/>
        <ButtonContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default Container