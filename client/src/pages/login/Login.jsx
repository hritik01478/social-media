import './login.css'

export const Login = () => {
  return (
      <div className='login'>
          <div className="loginCard">
              <div className="loginLeft">
                  <h1>Hritik Social</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum dolore molestiae vitae dignissimos fugiat quisquam suscipit nemo vero commodi!
                  </p>
                  <span>Do you have an account?</span>
                  <button>Register</button>
              </div>
              <div className="loginRight">
                  <h1>Login</h1>
                  <form action="">
                      <div className="loginInput">
                        <input type="text" />
                        <label>Username</label>
                      </div>
                      <div className="loginInput">
                        <input type="password" />
                        <label>Password</label>
                      </div>
                      <button>Login</button>
                  </form>
              </div>
          </div>
    </div>
  )
}
