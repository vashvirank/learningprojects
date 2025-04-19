import React from 'react'
import styles from './ButtonContainer.module.css'

const ButtonContainer = ({onButtonClick}) => {
  let buttons = ['AC', '%',  '<-',  '/',  '1',  '2',  '3',  '*',  '4',  '5',  '6',  '-',  '7', '8', '9',  '+',  '00',  '0',  '.',  '=' ];
  return(
    <div className={styles.buttonsContainer}>
      {
        buttons.map((value) =>
          (
            <button key={value} onClick={() => onButtonClick(value)} className={`${styles.button} ${value === '=' ? styles.blueButton : ''}`}>
              {value}
            </button>
          )
        )
      }
    </div> 
  )
}

export default ButtonContainer