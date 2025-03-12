import React from 'react';
import Table from 'react-bootstrap/Table';


const studentData =  [
    { id: 1, name: 'Alice', subject: 'Math', grade: 'A' },
    { id: 2, name: 'Bob', subject: 'Science', grade: 'B' },
    { id: 3, name: 'Charlie', subject: 'History', grade: 'A-' },
    { id: 4, name: 'Diana', subject: 'English', grade: 'B+' },
    { id: 5, name: 'Edward', subject: 'Math', grade: 'C' },
];

// function to render tbody elements

const background = {
    'A': 'bg-success text-white',
    'B': 'bg-info text-white',
    'C': 'bg-warning text-dark',
    'A-': 'bg-success text-white',
    'B+': 'bg-info text-white',
}

const renderBody = () => {
    const bodyElements = studentData.map((data) => {
        const bodyElement = (
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.subject}</td>
                <td className={background[data.grade]}>{data.grade}</td>
            </tr>
            )
        return bodyElement;
        })
    return bodyElements;
}


const TableComp = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </Table>
    );
};

export default TableComp;