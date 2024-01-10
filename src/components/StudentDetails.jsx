import React from "react";

export const StudentDetails = (props) => {
    return <div>
    <h1> Enter Student Details</h1>
    <table>
        <thead>
            <th>Name</th>
            <th>Comment</th>
            <th>City</th>
            <th>Gender</th>
            <th>Language</th>
        </thead>
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.comment}</td>
                <td>{props.city}</td>
                <td>{props.gender}</td>
                <td>{props.language ?.toString()}</td>
            </tr>
        </tbody>    
    </table>
    </div>
}