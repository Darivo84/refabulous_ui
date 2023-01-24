import '../styles/styles.scss'

// TODO: introduce props
const FormComponent = () => {
  return (
    <div>
      <div className="nameWrapper">
        <input 
          className="firstName"
          type="text" 
          name="name" 
          placeholder='First name'
          />
        <input 
          className="lastName"
          type="text" 
          name="lastName" 
          placeholder='Last name' 
        />
      </div>
      <div className="telephoneWrapper">
        <input 
          className="formInputs" 
          type="text" 
          name="phone" 
          placeholder='Telephone' />
      </div>
      <div className="queryWrapper">
        <textarea 
          type="text" 
          name="lastName" 
          placeholder='Your query' 
        />
      </div>
      <div className="btnWrapper">
        <button>Send</button>
      </div>
    </div>
  )
}

export default FormComponent