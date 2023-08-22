import React, { useEffect, useState } from 'react'



const AuthPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordDirty, setPasswordDirty] = useState(true)
  const [emailDirty, setEmailDirty] = useState(true)
  const [emailError, setEmailError] = useState('Заполните Email')
  const [passwordError, setPasswordError] = useState(
    'Пароль не может быть пустым'
  )
  const [formValid, setFormValid] = useState(false)
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError])

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Не корректный email')
    } else {
      setEmailError('')
    }
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,80}$/
    if (!regularExpression.test(e.target.value)) {
      setPasswordError('используйте в пароле цифры и спец символ % & # и др')
      if (e.target.value.length < 3 || e.target.value.length > 80) {
        setPasswordError('Пароль должен быть длиннее 3 и меньше 80 символов')
        if (!e.target.value) {
          setPasswordError('Пароль не может быть пустым')
        }
      }
    } else {
      setPasswordError('')
    }
  }
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }
  return (
    <form className="Form">
      <h1 className="h1">Авторизация</h1>
      {emailDirty && emailError && (
        <div className="TextError">{emailError}</div>
      )}
      <input
        onChange={(e) => emailHandler(e)}
        defaultValue={email}
        onBlur={(e) => blurHandler(e)}
        className="Ema"
        mame="email"
        type="text"
        placeholder="Пожалуйста, введите email ..."
      />
      {passwordError && passwordDirty && (
        <div className="TextError">{passwordError}</div>
      )}
      <input
        onChange={(e) => passwordHandler(e)}
        className="Pass"
        name="password"
        type="password"
        defaultValue={password}
        placeholder="Пожалуйста, введите пароль ..."
        onBlur={blurHandler}
      />
      <button disabled={!formValid} className="Reg" type="submit">
        войти
      </button>
    </form>
  )
}

export default AuthPage
