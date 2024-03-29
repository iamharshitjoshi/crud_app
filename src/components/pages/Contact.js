import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact Page</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group">
            <label for="floatingTextarea">Comment</label>
            <div class="input-group">
                <textarea class="form-control" id="floatingTextarea" placeholder=" "></textarea>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
