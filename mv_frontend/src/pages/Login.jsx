import React, { useState } from 'react';

function Login() {
    const [data, setData] = useState({
        email: "",
        password: "",
        cpassword: "",
    });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data)
  };

  const onChange = (e) => {
    const {name, value} = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <form onSubmit={onSubmit} style={{ textAlign: 'center', borderRadius: '10px', backgroundColor: '#404040', padding: '20px', maxWidth: '400px', width: '90%' }}>
            <h1 style={{ marginBottom: '20px', color: '#FFFFFF' }}>Movie Reviews</h1>
            <input type="text" name="email" placeholder="Email" value={data.email} onChange={onChange} style={{ padding: '8px', borderRadius: '15px', backgroundColor: '#FFFFFF', marginBottom: '10px', width: '90%' }} />
            <br />
            <input type="password" name="password" placeholder="Password" value={data.password} onChange={onChange} style={{ padding: '8px', borderRadius: '15px', backgroundColor: '#FFFFFF', marginBottom: '10px', width: '90%' }} />
            <br />
            <br />
            <button type="submit" style={{ padding: '10px 20px', borderRadius: '10px', backgroundColor: '#000000', cursor: 'pointer' }}>Login</button>
            <br />
            <br />
            <span style={{ cursor: 'pointer'}} onClick={() => { window.location.href = '/signup'; }}>Signup</span>
        </form>
    </div>
  );
};

export default Login;