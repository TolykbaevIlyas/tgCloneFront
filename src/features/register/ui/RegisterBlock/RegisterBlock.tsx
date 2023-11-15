'use client'

import React, { useState } from 'react'
import style from '../../assets/css/style.module.css'
import MyInput from '@/shared/ui/Input/MyInput'
import { requestToRegister } from '../../api'

const RegisterBlock = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  return (
    <form className={style.RegisterBox} onSubmit={e => e.preventDefault()}>
        <h2>Registration</h2>
        <MyInput placeholder='Имя' type='text' value={name} onChange={setName}/>
        <MyInput placeholder='email' type='text' value={email} onChange={setEmail}/>
        <MyInput placeholder='Пароль' type='text' value={password} onChange={setPassword}/>
        <MyInput placeholder='Подтверждение пароля' type='text' value={confirmPassword} onChange={setConfirmPassword}/>
        <button onClick={() => requestToRegister({name, email,password})}>Register</button>
    </form>
  )
}

export default RegisterBlock