function LoginInput({ label, type, name, value, onChange }) {
  return (
    <label className="login-field" htmlFor={name}>
      {label}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={type === 'password' ? 'current-password' : 'username'}
      />
    </label>
  )
}

export default LoginInput