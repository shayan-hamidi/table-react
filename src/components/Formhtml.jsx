import users from "../UsersData";
import { Component } from "react";
class Formhtml extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
        users : users
        };
      }
    state ={
        users : users
      }
      handleDeleteUser = (id) => {
        this.setState({users : this.state.users.filter(user => user.id !== id)})
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
      addNew = () => {
        const fullName = document.getElementById('forFullName').value;
        console.log(fullName)
        const status = document.getElementById('forStatus').value;
        console.log(status)
        const email = document.getElementById('forEmail').value;
        console.log(email)
        this.setState({ users: [...users, {id: Math.random() * 1000, fullName , status, email}] })
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
    <form>
            <label htmlFor="forFullName">Full Name</label>
            <input type="text" id="forFullName" required />
            <label htmlFor="forStatus">Status</label>
            <input type="text" id="forStatus" required />
            <label htmlFor="forEmail">Email</label>
            <input type="email" id="forEmail" required />
            <button type="button" onClick={this.addNew}>Add To List</button>
        </form>
        </div>
          );
      }
}
export default Formhtml;