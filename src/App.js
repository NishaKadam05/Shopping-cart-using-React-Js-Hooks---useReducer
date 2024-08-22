import ReactDom from 'react-dom';
import React, {useState,useReducer} from 'react';
import './App.css'

const initialState={
  Apple:0,
  Orange:0,
  Grapes:0,
  Mango:0,
  Banana:0
};
function buttons(state,action){
  switch(action.category){
    case 'increment':
      return {...state, [action.fruit]:state[action.fruit]+1};
    case 'decrement':
      return {...state, [action.fruit]:state[action.fruit]-1};
    default:
      throw "No items";
  }
}

function Cart(){
  const [state,dispatch]=useReducer(buttons,initialState);
  const total=state.Apple+state.Orange+state.Grapes+state.Mango+state.Banana;
  return(
    <div>
      <h1>Shopping Cart</h1>
      <div className='allItems'>
          <div className='item'>
          <span>Apple</span>
          <button className='btna-1' onClick={()=>dispatch({category:'decrement',fruit:'Apple'})}>-</button>
          <span>{state.Apple}</span>
          <button onClick={()=>dispatch({category:'increment',fruit:'Apple'})}>+</button>
          </div>
          <div className='item'>
          <span>Orange</span>
          <button className='btn-1' onClick={()=>dispatch({category:'decrement',fruit:'Orange'})}>-</button>
          <span>{state.Orange}</span>
          <button onClick={()=>dispatch({category:'increment',fruit:'Orange'})}>+</button>
          </div>
          <div className='item'>
          <span>Grapes</span>
          <button className='btn-1' onClick={()=>dispatch({category:'decrement',fruit:'Grapes'})}>-</button>
          <span>{state.Grapes}</span>
          <button onClick={()=>dispatch({category:'increment',fruit:'Grapes'})}>+</button>
          </div>
          <div className='item'>
          <span>Mango</span>
          <button className='btn-1' onClick={()=>dispatch({category:'decrement',fruit:'Mango'})}>-</button>
          <span>{state.Mango}</span>
          <button onClick={()=>dispatch({category:'increment',fruit:'Mango'})}>+</button>
          </div>
          <div className='item'>
          <span>Banana</span>
          <button className='btn-1' onClick={()=>dispatch({category:'decrement',fruit:'Banana'})}>-</button>
          <span>{state.Banana}</span>
          <button onClick={()=>dispatch({category:'increment',fruit:'Banana'})}>+</button>
          </div>
          <div className='total'>
            <span>Total Items: </span><span>{total}</span>
          </div>
      </div>
    </div>
  )
}

export default Cart;