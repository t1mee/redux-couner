import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  addCounter,
  decrement,
  increment,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const counters = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(addCounter())}
        >
          Add
        </button>
        {
        counters.map(({value : count }, index) => 
          <div key={index} className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement({index}))}
          >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment({index}))}
          >
          +
        </button>
      </div>
        )}
     
    </div>
  );
}
