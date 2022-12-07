import './register.css'

export const Register = () => {
  return (
      <div className='register'>
          <div className="registerCard">
              <div className="registerLeft">
                  <h1>Hritik Social</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum dolore molestiae vitae dignissimos fugiat quisquam suscipit nemo vero commodi!
                  </p>
                  <span>Do you have an account?</span>
                  <button>Login</button>
              </div>
              <div className="registerRight">
                  <h1>Register</h1>
                  <form action="">
                    <div className="registerInput">
                        <input type="text" placeholder='Name'/>
                        <label>Name</label>
                      </div>
                      <div className="registerInput">
                        <input type="text" placeholder='Username'/>
                        <label>Username</label>
                      </div>
                      <div className="registerInput">
                        <input type="email" placeholder='Email'/>
                        <label>Email</label>
                      </div>
                      <div className="registerInput">
                        <input type="password" placeholder='password'/>
                        <label>Password</label>
                      </div>
                      <button>Login</button>
                  </form>
              </div>
          </div>
    </div>
  )
}
