import React from 'react';

const Singup = () => {
  return (
    <div className="card mt-3">
      <form className="m-3 d-flex flex-column justify-content-center">
        <h2 className="text-center">Sing up</h2>
        <div className="mb-2">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-2">
          <label for="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-2">
          <label for="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-2">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-2">
          <label for="exampleInputEmail1" className="form-label">
            Phone (10 characters)
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
        <p>
          Already have an account? <a href="/#/login">Sing in</a>{' '}
        </p>
      </form>
    </div>
  );
};

export default Singup;
