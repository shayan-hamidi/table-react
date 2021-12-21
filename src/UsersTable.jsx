import { Component } from "react";
import users from "./UsersData";
class UsersTable extends Component{
  state ={
    users : users
  }
   handleDeleteUser = (id) => {
    this.setState({users : this.state.users.filter(user => user.id !== id)})
  }
  handleAddUser = () => {
    const fullName = prompt('Enter new name');
    const status = prompt('Enter new status');
    const email = prompt('Enter new email');
    this.setState({ users: [...users, {id: Math.random() * 1000, fullName , status, email}] })
  }
  handleUpdateUser =(oldUser) => {
    const fullName = prompt('Enter new name',oldUser.fullName);
    const status = prompt('Enter new status',oldUser.status);
    const email = prompt('Enter new email',oldUser.email);
    this.setState({
      users: this.state.users.map(user => user.id === oldUser.id ? {
        ...oldUser,
        fullName,
        status,
        email,
      } : user)
    })
  }
  render(){
    return(
      <div>
      <table>
      <thead>
        <tr>
          <td>id</td>
          <td>full name</td>
          <td>status</td>
          <td>email</td>
          <td>update</td>
        </tr>
      </thead>
      <tbody>
      {this.state.users.map(user => (
             <tr key={user.id}>
             <td>{user.id}</td>
             <td>{user.fullName}</td>
             <td>{user.status}</td>
             <td>{user.email}</td>
             <td>
               <button onClick={() => this.handleUpdateUser(user)}>{"update"}</button>
               <button onClick={ ()=> this.handleDeleteUser(user.id) }>{"delete"}</button>
             </td>
             </tr>
  ))}
      </tbody>
    </table>
    <button onClick={this.handleAddUser}>Add New User</button>
    </div>
    )
  }
}
export default UsersTable;