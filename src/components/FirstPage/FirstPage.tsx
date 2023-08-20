import { useState } from "react";
import Input from '@mui/material/Input';
import { Form, Link } from "react-router-dom";

const FirstPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);

    const url = "/second";
    if (!name || !phone || !email) {
      return <Link to={"/"} />;
    }
    window.location.href = url;
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /> <br />
        <Input
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /> <br />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default FirstPage;
