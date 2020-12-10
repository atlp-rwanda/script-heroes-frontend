import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

const UsersList = () => {
  const roles = useSelector((state) => state.roles.roles);
  const users = useSelector((state) => state.users.users);
  const findRoleName = (id) => {
    const userRole = roles.filter((role) => role.id === id)[0];

    return userRole ? userRole.name : "";
  };
  return (
    <div>
      <h3>Roles</h3>
      <Table striped className="mb-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Names</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.email}</td>
              <td>{findRoleName(user.roleId)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default UsersList;
