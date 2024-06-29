import './Button.css'

const Button = (prop) => {
  return (
    <button className="button small"><i className="fa-solid fa-chevron-left pe-3"></i>{prop.data}</button>
  )
}

export default Button