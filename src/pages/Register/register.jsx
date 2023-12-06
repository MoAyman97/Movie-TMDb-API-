import { useState } from "react";

export default function Register(){
    const [passShow,setPassShow]=useState(false)
    const [confirmPassShow,setConfirmPassShow]=useState(false)
    const [user, setUser] = useState({
        name:"",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    })
    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        usernameError: "",
        passwordError: "",
        confirmPasswordError: "",
    })

    const handleRegister = (evt) => {
        var regex = /^[a-zA-Z]{2,5}(@)(gmail|yahoo)(.com)$/
        var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        var userRegex = /^\S*$/
        
        if (evt.target.name == "name") {

            setUser({ ...user, name: evt.target.value })
            setErrors({ ...errors, nameError: (evt.target.value.length == 0) ? "Name is Required" : (evt.target.value.length < 3) ? "Name must be at least 3 characters" : "" })

        } 

       else if (evt.target.name == "email") {

            setUser({ ...user, email: evt.target.value })
            setErrors({ ...errors, emailError: (evt.target.value.length == 0) ?"Email is Required": regex.test(evt.target.value) ? "" : "Invalid Email"})

        }
        else if (evt.target.name == "username") {

            setUser({ ...user, username: evt.target.value })
            setErrors({ ...errors, usernameError: (evt.target.value.length == 0) ?"Username is Required": userRegex.test(evt.target.value) ? "" : "Invalid Username"})

        }
         else if (evt.target.name == "password") {
            setUser({ ...user, password: evt.target.value })
            setErrors({ ...errors, passwordError: (evt.target.value.length == 0) ? "Password is Required" : passRegex.test(evt.target.value)  ? "" : "Invalid Password" })
        }
        else if (evt.target.name == "confirmPassword") {
            setUser({ ...user, confirmPassword: evt.target.value })
            setErrors({ ...errors, confirmPasswordError: (evt.target.value.length == 0) ? "Confirm Password required" : evt.target.value !== user.password  ? "Password doesn't match" : "" })
        }
    }

    const handleSubmit=(evt) =>{
        evt.preventDefault();

    }
    const showPass = () => {
        setPassShow(passShow ? false : true);
      };
    const showConfirmPass = () => {
        setConfirmPassShow(confirmPassShow ? false : true);
      };
    

    return<>
    <div className="container bg-dark text-light w-50 justify-content-center rounded mt-4">
    <h3 className="p-2">Register</h3>
        <div className="row p-3">
            <div className="col ">
            <form autoComplete="off" onSubmit={(e)=>{handleSubmit(e)}}>
            <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Name :</label>
                    <input type="text" className={`form-control ${(errors.nameError)?'border-danger shadow-none':''}`}
                        id="formGroupExampleInput" value={user.name} name="name" required
                        placeholder="Please Enter Name" onChange={(e) => { handleRegister(e) }} />
                    <p className="text-danger">{errors.nameError}</p>
            </div>
            <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email :</label>
                    <input type="text" className={`form-control ${(errors.nameError)?'border-danger shadow-none':''}`}
                        id="formGroupExampleInput" value={user.email} name="email"
                        placeholder="Please Enter Email" onChange={(e) => { handleRegister(e) }} />
                    <p className="text-danger">{errors.emailError}</p>
            </div>
            <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Username :</label>
                    <input type="text" className={`form-control ${(errors.usernameError)?'border-danger shadow-none':''}`}
                        id="formGroupExampleInput" value={user.username} name="username" required
                        placeholder="Please Enter UserName" onChange={(e) => { handleRegister(e) }} />
                    <p className="text-danger">{errors.usernameError}</p>
            </div>
            <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password :</label>
                    <input type={passShow ? "text":"password"} className="form-control"
                        id="formGroupExampleInput2" value={user.password} name="password" required
                        placeholder="Please Enter Password" onChange={(e) => { handleRegister(e) }} />
                        <input type="checkbox" onClick={showPass}/>
                    <p className="text-danger">{errors.passwordError}</p>

            </div>
            <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Confirm Password :</label>
                    <input type={confirmPassShow ? "text":"password"} className="form-control"
                        id="formGroupExampleInput2" value={user.confirmPassword} name="confirmPassword" required
                        placeholder="Please Confirm Password" onChange={(e) => { handleRegister(e) }} />
                        <input type="checkbox" onClick={showConfirmPass}/>
                    <p className="text-danger">{errors.confirmPasswordError}</p>

            </div>
            <div className="col-12">
                    <button type="submit" className="btn btn-dark">Register</button>
            </div>
            </form>
            </div>
            
        </div>
    </div>
        
    </>
}