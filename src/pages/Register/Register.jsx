import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const form =e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        
        const newUser = { name, photoURL, email, password };
        console.log(newUser);
        fetch('http://localhost:5000/user',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser),
        })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Data added successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
              form.reset();
            }
          })
      
       
      };
      
    return (
        <div>
            <div >
                <h2 className="text-xl text-center">Register Yourself</h2>
                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-2">Already have an Account <Link className="text-lime-700 font-bold" to="/login">Login</Link></p>

            </div>
        </div>
    );
};

export default Register;