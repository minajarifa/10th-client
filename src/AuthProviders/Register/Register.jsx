import {  useContext, useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FaEye } from "react-icons/fa6";
import { AuthContext } from "../Auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {
  const  navigate =useNavigate()
  const { createUser,signInWithGoogle, signInWithGithub, updateUserProfile}= useContext(AuthContext)
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const newUser = { name, email, password, photo };
    // console.log(newUser);
    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo)
        // console.log(result.user);
        event.target.reset();
        Swal.fire("Sign Up successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result=>{
      // console.log(result.user)
      Swal.fire("Sign Up successfully!");
      navigate('/')
    })
    .then(error=>{
      console.error(error)
    })
  }

  const handleGithubSignIn = () =>{
    signInWithGithub()
    .then(result=>{
      // console.log(result.user)
      Swal.fire("Sign Up successfully!");
      navigate('/')
    })
    .then(error=>{
      console.error(error)
    })
  } 

  return (
    <div className="mb-20">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex relative ">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                  />
                  <button
                    className="absolute  sm:ml-56 md:ml-72 mt-5"
                    type="button"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <AiFillEyeInvisible /> :<FaEye />}
                  </button>
                </div>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="m-8 flex justify-center">
                  <button onClick={handleGoogleSignIn} className="mr-5 btn">Google</button>
                  <button onClick={handleGithubSignIn}  className="mr-5 btn">Github</button>
                </div>
                <p className="text-3xl text-center">
                Don't have an Account please
                <Link to="/Login">
                  <span className="text-sky-800">Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;