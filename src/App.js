import { Outlet, Link } from "react-router-dom";
import React from 'react';
import './App.css'
export default function App() {

  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {setChecked(!checked)};

  const [checkeds, setCheckeds] = React.useState(false);
  const handleChanges = () => {setCheckeds(!checkeds)};


  return (

    <div class = "text-center bg-zinc-300 py-8 px-8 space-y-5">

      <h1 className="text-5xl font-bold text-center" > Welcome to Learning Cripto !!</h1>
      <p>This is a place where you can learn/teach all about cripto.</p>
      <p>Please log in as a <b>"Teacher"</b> if you want to teach all what you know about cripto, in next step you will choose what cripto do you will teach about.</p>
      <p>Pleas log in as a <b>"Student"</b> if you want to learn all about criptos that "Teachers" have to teach.</p>
      <div class = "space-x-10 items-center">
    </div>

    <div class = " space-x-5">
    <h2>Sing Up</h2>
          <input 
          type="checkbox"
          checked = {checked}
          onChange = {handleChange}
          />
          Teacher

          <input 
          type="checkbox"
          checked = {checkeds}
          onChange = {handleChanges}
          />
          Student
    </div>
      <form class = "space-y-5" >

       <label>
          <p>Username</p>
          <input 
            type="text"/>
        </label>
        <label>
          <p>Password</p>
          <input 
            type="password"/>
        </label>
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="signup">SignUp</button>
        </div>
      </form>









      <form  class = "space-y-5">
      <h2>Log In</h2>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="login">LogIn</button>
        </div>
      </form>
        <Link to="/Choise">Choise what cripto do you want to learn/teach!</Link>
      <Outlet />
    </div>
  );
}