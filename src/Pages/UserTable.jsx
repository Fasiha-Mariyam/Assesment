import React, { useState } from 'react';
import { UsersList } from '../Components/UsersList';
import Form from 'react-bootstrap/Form';
import { FaSearch } from "react-icons/fa";

export default function UserTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; // Adjust as needed


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {/* heading of User FOrm */}
      <div className="d-flex justify-content-start text-dark mt-5 mb-4 rounded">
        <span className='fs-2'>User Table</span>
      </div>

      {/* Render UsersList component with pagination */}
      
      <div className='d-flex justify-content-between'>
       <div className='fs-5'> Showing <span className='border border-dark m-2'> {usersPerPage} </span> entries</div>
      <div className="d-flex me-3">
        <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"/>
              <button className='btn btn-lg btn-dark'><FaSearch /></button>
      </div>
      </div> 
      
      <br />

      <UsersList
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        
      />
    </>
  );
}
