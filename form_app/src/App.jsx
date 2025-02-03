import { useState } from 'react';
import './App.css'

function App() {

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    phone: '',
    subject: '',
    resume: '',
    url: '',
    about: '',

  })

  const handleChanges = (e) => {
      setValues({...values, [e.target.name]:[e.target.value]}) //take all the previous values and update after
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      //axios.post('url', values)
      console.log(values)
  }

  const resetFunction = (e) => {
      setValues({firstname: '', lastname: '', email: '', gender: '', phone: '', subject: '', resume: '', url: '', about: ''
      })
  }


  return (

    <div className="container">
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name*</label>
        <input type="text" placeholder='Enter your first name' name='firstname'
        onChange={(e) => handleChanges(e)} required value={values.firstname}/>

        <label htmlFor="lastName">Last Name*</label>
        <input type="text" placeholder='Enter your last name' name='lastname'
        onChange={(e) => handleChanges(e)} required value={values.lastname}/>

        <label htmlFor="email">Email*</label>
        <input type="text" placeholder='Enter your email'name='email'
        onChange={(e) => handleChanges(e)} required value={values.email}/>

        <label htmlFor="phone">Phone*</label>
        <input type="text" placeholder='Enter your phone number'name='phone'
        onChange={(e) => handleChanges(e)} required value={values.phone}/>

        <label htmlFor="gender">Gender</label>
        <input type="radio" name='gender'
        onChange={(e) => handleChanges(e)} value={values.gender}/> Male
        <input type="radio" name='gender'
        onChange={(e) => handleChanges(e)} value={values.gender}/>Female

        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject" onChange={(e) => handleChanges(e)} value={values.subject}>
          <option value="dev">Developpement</option>
          <option value="net">Networking</option>
          <option value="ds">Data Science</option>
          <option value="ai">Artificial Intelligence</option>
          <option value="other">Other..</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input type="file" placeholder='Select File' name='resume' 
        onChange={(e) => handleChanges(e)} value={values.resume}/>

        <label htmlFor="url">Your Website</label>
        <input type="text" name='url' placeholder='Enter Your URL'
        onChange={(e) => handleChanges(e)} value={values.url}/>

        <label htmlFor="about">About</label>
        <textarea name="about" id="about" cols='30' rows='10' placeholder='Describe Your Self'
        onChange={(e) => handleChanges(e)} value={values.about}></textarea>

        <button class="button1" type='button' onClick={resetFunction}>Reset</button>
        <button class="button2" type='submit'>Submit</button>


      </form>

    </div>

  );
}

export default App
