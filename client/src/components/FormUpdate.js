import { useState, useEffect } from "react";
import "./style/Form.css";

const FormUpdate = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [lvl, setLvl] = useState("");

  useEffect(() => {
    if (props.form) {
      setUsername(props.form.username);
      setEmail(props.form.email);
      setExperience(props.form.experience);
      setLvl(props.form.lvl);
    }
  }, [props.form]);

  const usernameOnChangeHandle = (event) => {
    setUsername(event.target.value);
  };

  const emailOnChangeHandle = (event) => {
    setEmail(event.target.value);
  };

  const experienceOnChangeHandle = (event) => {
    setExperience(event.target.value);
  };
  const lvlOnChangeHandle = (event) => {
    setLvl(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const data = {
      id: props.form.id,
      username: username,
      email: email,
      experience: experience,
      lvl: lvl,
    };

    props.onUpdateStudent(data);

    setUsername("");
    setEmail("");
    setExperience("");
    setLvl("");
  };

  return (
    <form className="form__controls" onSubmit={onSubmit}>
      <h2>UPDATE DATA STUDENT</h2>
      <div className="form__control">
        <label>Username</label>
        <input type="text" value={username} onChange={usernameOnChangeHandle}></input>
      </div>
      <div className="form__control">
        <label>Email</label>
        <input type="text" value={email} onChange={emailOnChangeHandle}></input>
      </div>
      <div className="form__control">
        <label>Experience</label>
        <input type="text" value={experience} onChange={experienceOnChangeHandle}></input>
      </div>
      <div className="form__control">
        <label>lvl</label>
        <input type="text" value={lvl} onChange={lvlOnChangeHandle}></input>
      </div>

      <button type="submit" className="form__actions">
        Submit
      </button>
    </form>
  );
};

export default FormUpdate;
