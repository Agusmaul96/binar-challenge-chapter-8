import "./style/Table.css";

const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>NO</td>
          <td>Username</td>
          <td>Email</td>
          <td>Experience</td>
          <td>lvl</td>
          <td>Action</td>
        </tr>
      </thead>

      <tbody>
        {props.students.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.experience}</td>
              <td>{item.lvl}</td>
              <td>
                <button onClick={() => props.onEditStudent(item)}>Edit</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
