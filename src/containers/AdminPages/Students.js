import React,{Component} from 'react'
import "./Students.css"

class Student extends React.Component {
   constructor(props) {
      super(props) 
      this.state = { 
        
      }
   }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
         <div>
            <h1>Student List</h1>
         </div>
      )
   }
   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id,first_name,last_name, age, email } = student //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{first_name}</td>
             <td> {last_name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }

 render() {
    return (
       <div>
          <h1 id='title'>Student List</h1>
          <table id='students'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
 renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 render() {
    return (
       <div>
          <h1 id='title'>Student List</h1>
          <table id='students'>
             <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}

export default Student