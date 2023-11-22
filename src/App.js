import React, { useState } from 'react';
import './App.css';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    email: '',
  })
  
  const [buttonClicked, setButtonClicked] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleButtonClick = () => {
    setButtonClicked(true)
  }

  return (
    <div className="registration_form">
      <h1>Регистрация пользователя</h1>
      <form>
        <div className="form_group">
          <label class="fullName">ФИО</label>
          <input type="text" id="firstName" name="firstName" value={formData.fullName} onChange={handleChange}/>
        </div>
        <div className="form_group">
          <label class="phoneNumber">Номер телефона</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
        </div>
        <div className="form_group">
          <label class="email">Email адрес</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
      </form>

      <button onClick={handleButtonClick}>Отобразить данные</button>

      {buttonClicked && (
        <div className="preview">
          <h2>Ваши данные:</h2>
          <p>ФИО: {formData.firstName}</p>
          <p>Номер телефона: {formData.phoneNumber}</p>
          <p>Email адрес: {formData.email}</p>
        </div>
      )}
    </div>
  )
}


