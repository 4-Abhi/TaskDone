import "./App.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const App = () => {
  const {
    register,
    handleSubmit,

    // formState: { errors },
  } = useForm();

  const [newuser, setNew] = useState([]);
  const [user, setUser] = useState([]);
  const onSubmit = (data) => {
    const userdata = {
      name: data.name,
      profile: URL.createObjectURL(data.profile[0]),
      email: data.email,
      phone: data.phone,
    };
    const updateuser = [...user, userdata];
    setUser(updateuser);
  };
  useEffect(() => {
    setNew(user);
  }, [user]);
  return (
    <div className="home">
      <div className="header">
        <h1>User Data</h1>
      </div>

      <div className="main">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register("phone", { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  {...register("profile", { required: true })}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="col-lg-8 mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Profile</th>
            </tr>
          </thead>
          <tbody>
            {newuser.length > 0 && (
              <>
                {newuser.map((item) => {
                  return (
                    <tr key={item.phone + Math.random()}>
                      <th scope="row">{item.name}</th>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                        <img
                          src={item.profile}
                          alt="userlogo"
                          className="userpro"
                        />
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
