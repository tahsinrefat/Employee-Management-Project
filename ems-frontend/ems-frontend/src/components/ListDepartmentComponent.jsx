import React, { useEffect, useState } from 'react'
import { deleteDepartmentById, getAllDepartments } from '../services/DepartmentService';
import { Link, useNavigate } from 'react-router-dom';

const ListDepartmentComponent = () => {

    // let dummyData = [
    //     {
    //         "id": 1,
    //         "departmentName": "R&D",
    //         "departmentDescription": "Research and Development"
    //     },
    //     {
    //         "id": 2,
    //         "departmentName": "Finance",
    //         "departmentDescription": "Finance Department"
    //     },
    //     {
    //         "id": 3,
    //         "departmentName": "Sports",
    //         "departmentDescription": "Sports Department"
    //     }
    // ]

    const [departments, setDepartments] = useState([]);

    const navigator = useNavigate();

    useEffect( () => {
        listOfDepartments();
    }, [])

    const listOfDepartments = () => {
        getAllDepartments().then((response) => {
            console.log(response.data);
            setDepartments(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    const updateDepartment = (id) => {
        navigator(`/edit-department/${id}`);
    }
    const removeDepartment = (id) => {
        deleteDepartmentById(id).then((response) => {
            console.log(response.data);
            listOfDepartments();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2 className="text-center">List of Departments</h2>
        <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Department Id</th>
                    <th>Department Name</th>
                    <th>Department Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    departments.map( department =>
                        <tr key={department.id}>    {/*have to give a unique identifier that is required */}
                            <td>{department.id}</td>
                            <td>{department.departmentName}</td>
                            <td>{department.departmentDescription}</td>
                            <td>
                                <button onClick={() => updateDepartment(department.id)} className='btn btn-info'>Update</button>
                                <button onClick={() => removeDepartment(department.id)} className='btn btn-danger'style={{marginLeft: '10px'}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListDepartmentComponent