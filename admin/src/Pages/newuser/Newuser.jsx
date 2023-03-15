import "./Newuser.css"

const Newuser = () => {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="John" />
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder="John Snow" />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="John.s@gmail.com" />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="Password.." />
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="+1 123 456 789" />
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder="New York | USA" />
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">

                <input type="radio" name="gender" id="male" value="male" />
                <label for="Male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
                </div>
            </div>
            <div className="newUserItem">
                <label >Active</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

            </div>
            <button className="newUserButton">
                Create
            </button>
        </form>
        </div>
  )
}

export default Newuser