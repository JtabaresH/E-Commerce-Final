import React from 'react';

const Singup = () => {
  const submit = () => {};

  return (
    <div
      className="card mt-3 d-flex justify-content-center"
      style={{ maxWidth: '500px' }}
    >
      <form className="m-3 d-flex flex-column justify-content-center">
        <h2 className="text-center">Sing up</h2>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-2">
          <label htmlFor="phone" className="form-label">
            Phone (10 characters)
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
        <p>
          Already have an account? <a href="/#/login">Log in</a>{' '}
        </p>
      </form>
    </div>
  );
};

export default Singup;
