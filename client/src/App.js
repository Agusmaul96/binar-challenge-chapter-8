import React from "react";
// import initialDetails from "./data/initialDetails";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import FormUpdate from "./components/FormUpdate";
import Table from "./components/Table";
import Search from "./components/Search";
import PlayerData from "./data/dataplayer";

function App() {
  const [studentData, setStudentData] = useState(PlayerData);
  const [formData, setFormData] = useState(null);

  const addStudent = (data) => {
    const lastStudent = studentData[studentData.length - 1];

    const newStudent = {
      ...data,
      id: lastStudent.id + 1,
    };

    setStudentData((prevState) => {
      return [...prevState, newStudent];
    });
  };

  const getStudentData = (data) => {
    setFormData(data);
  };

  const updateStudent = (data) => {
    setStudentData((prevState) => {
      const newStudentData = prevState.filter((student) => student.id !== formData.id);

      console.log("newStudentData", newStudentData);

      return [...newStudentData, data];
    });
  };
  return (
    <div>
      <Search details={PlayerData} />
      <div className="form">
        <Form form={formData} onAddStudent={addStudent} />
        <FormUpdate form={formData} onUpdateStudent={updateStudent} />
      </div>

      <Table students={studentData} onEditStudent={getStudentData} />
      <div className="tc bg-green ma0 pa4 min-vh-100"></div>
    </div>
  );
}

export default App;
