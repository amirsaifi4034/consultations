import React from 'react';
import styles from './Whychoose.module.css';

export const Choose_items = (props) => {
  return (
    <>
        <div className={styles.chooseItems}>
          <p>{props.chooseusItem.chooseLeft} <b>{props.chooseusItem.chooseBold} </b> {props.chooseusItem.chooseRight}</p>
        </div>
    </>
  )
}

export default Choose_items;