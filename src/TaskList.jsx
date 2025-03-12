import { Button } from 'bootstrap';
import React from 'react';
import Table from 'react-bootstrap/Table';



const tasks = [
    { id: 1, title: "Do laundry", completed: true },
    { id: 2, title: "Buy groceries", completed: false },
    { id: 3, title: "Write code", completed: true },
    { id: 4, title: "Read a book", completed: false },
    { id: 5, title: "Exercise", completed: true },
    { id: 6, title: "Water plants", completed: false },
    { id: 7, title: "Call a friend", completed: true },
    { id: 8, title: "Clean the house", completed: false },
    { id: 9, title: "Cook dinner", completed: true },
    { id: 10, title: "Plan weekend trip", completed: false },
  ];

  const renderTableCompleted = () => {
    const tableCompleted = tasks.map(data => {
        if(data.completed){
            const tableCompltedData = (
                <tr key={data.id}>
                    <td>{data.title}</td>
                    <td className='bg-success text-white' style={{textAlign: "center"}}>Completed</td>
                </tr>
            )
            return tableCompltedData
        }
    })
    return tableCompleted;
}
 
const renderTableNotCompleted = () => {
    const tableNotCompleted = tasks.map(data => {
        if(!data.completed){
            const tableNotCompltedData = (
                <tr key={data.id}>
                    <td>{data.title}</td>
                    <td className='bg-warning text-white' style={{textAlign: "center"}}>Pending</td>
                </tr>
            )
            return tableNotCompltedData
        }
    })
    return tableNotCompleted;
}


const TaskList = () => {
    return (
        <>
        <div className='container' style={{display:'flex'}}>
        <Table striped bordered hover>
            <thead>
                <tr><th className='bg-success text-white' style={{textAlign: "center"}} colSpan={2}>Completed Tasks</th></tr>
            </thead>
            <tbody>
            {renderTableCompleted()}
            </tbody>
        </Table>
        <Table striped bordered hover>
        <thead>
            <tr><th className='bg-warning text-white' style={{textAlign: "center"}} colSpan={2}>Pending Tasks</th></tr>
            </thead>
            <tbody>
            {renderTableNotCompleted()}
            </tbody>
        </Table>
        </div>
        </>
    );
};

export default TaskList;