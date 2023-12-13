import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

export const UsersList = ({ usersPerPage, currentPage, handlePageChange }) => {

    const myStyle = { backgroundColor: '#927cef' };
    const [loader, setLoader] = useState(true)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
          .then((response) => {
            setUsers(response.data.users);
            setLoader(false);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

    // Calculate the index range for the current page
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(users.length / usersPerPage);
  
    return (
        loader ? (
          <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '50vh' }}>
            <Spinner animation="grow" />
          </div>
        ) : (
          <div className="table-responsive">
            {/* Display current page users */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Profile Picture</th>
                  <th>Country</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <img src={user.image} alt={`Profile of ${user.name}`} style={{ width: '50px', height: '50px' }} />
                    </td>
                    <td>{user.company.address.city}</td>
                    <td>{user.company.address.state}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
  
            {/* Pagination buttons */}
            <div className="d-flex justify-content-between mb-5">
              <div className="d-flex justify-content-start">
                Showing {indexOfFirstUser + 1} to {indexOfLastUser} of {users.length}
              </div>
  
              <div className="d-flex justify-content-end me-3 gap-1">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className='btn btn-sm text-white'
                  style={myStyle}
                >
                  Previous
                </button>
  
                <span> Page {currentPage} of {totalPages} </span>
  
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={indexOfLastUser >= users.length}
                  className='btn btn-sm text-white'
                  style={myStyle}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )
    );
};
