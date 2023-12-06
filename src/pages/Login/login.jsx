
import { useState } from "react";

export default function Login(){
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: ""
    })
    const [passShow,setPassShow]=useState(false)

    const handleLogin = (evt) => {
        var regex = /^[a-zA-Z]{2,5}(@)(gmail|yahoo)(.com)$/

        if (evt.target.name == "email") {

            setUser({ ...user, email: evt.target.value })
            setErrors({ ...errors, emailError: (evt.target.value.length == 0) ?"Email is Required": regex.test(evt.target.value) ? "" : "Invalid Email"})

        } else if (evt.target.name == "password") {
            setUser({ ...user, password: evt.target.value })
            setErrors({ ...errors, passwordError: (evt.target.value.length == 0) ? "Password is Required" : (evt.target.value.length < 4)  ? "Password length at least 4 char" : "" })
        }

    }

    const handleSubmit=(evt) =>{
        evt.preventDefault();

    }
    const showPass = () => {
        setPassShow(passShow ? false : true);
      };

    return<>
    <div className="container-fluid mt-4 bg-dark rounded w-50 pt-3" style={{height:"450px"}} >
    <h3 className="text-light p-2">Login</h3>
        <div className="row p-3">
            <div className="col text-light">
            <form autoComplete="off" onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email :</label>
                    <input type="text" className={`form-control ${(errors.nameError)?'border-danger shadow-none':''}`}
                        id="formGroupExampleInput" value={user.email} name="email"
                        placeholder="Please Enter Email" onChange={(e) => { handleLogin(e) }} />
                    <p className="text-danger">{errors.emailError}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password :</label>
                    <input type={passShow ? "text":"password"} className="form-control"
                        id="formGroupExampleInput2" value={user.password} name="password" 
                        placeholder="Please Enter Password" onChange={(e) => { handleLogin(e) }} />
                        <input type="checkbox" onClick={showPass}/>
                    <p className="text-danger">{errors.passwordError}</p>

                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-light">Login</button>
                </div>
            </form>
            </div>
           
            
        </div>
    </div>
        
    </>
}