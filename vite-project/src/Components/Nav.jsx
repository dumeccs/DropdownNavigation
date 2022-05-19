import React from 'react'

const Nav = () => {
  return (
    <nav >
            <div className='nav-left'>
                <h2>Snap</h2>
               

            
                <label htmlFor="Features">Features</label>
                <select name="features" id="feature">
                    <option value="Todo List">Todo List</option>
                    <option value="Calendar" >Calendar</option>
                    <option value="Reminder" >Reminder</option>
                    <option value="Planning" >Planning</option>
                </select>
                <label htmlFor="Company">Company</label>
                <select name="Company" id="Company">
                    <option value="History">History</option>
                    <option value="Our Team" >Our Team</option>
                    <option value="Blog" >Blog</option>
                </select>
                <div class="nav-career">
                   <p>Careers</p>
                   <p>About</p>
                </div>
                
            </div>
            <div className='nav-right'>
                <p>Login</p>
                <button>
                    Register
                </button>
            </div>
    </nav>
  )
}

export default Nav