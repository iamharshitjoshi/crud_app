import React from 'react'

const About = () => {
  return (
    <div className='container'>
      <div className='py-4'>
      <h1>About Page</h1>

      <p className="lead">
      A CRUD application is a software application that performs four basic operations: 
      Create, Read, Update, and Delete. These operations represent the fundamental actions that can be performed on data. 
      Here's a brief overview of each operation:
        </p>
       
        <p className="lead">
        <ul>
          <li>Create (C): This operation involves the creation of new records or entities in the system. 
          In the context of a database, this typically means adding new rows to a table.
         </li>

          <li>Read (R): This operation involves retrieving or reading existing records or entities from the system. 
          In a database, it usually means querying data from a table.
          </li>
          
          <li>
          Update (U): This operation involves modifying or updating existing records or entities in the system. 
          In a database, it often involves updating the values of certain fields in a table.
          </li>

          <li>
          Delete (D): This operation involves removing or deleting existing records or entities from the system. 
          In a database, it typically means deleting rows from a table.
          </li>
        </ul>
       
        </p>
        

      </div>
    </div>
  )
}

export default About


