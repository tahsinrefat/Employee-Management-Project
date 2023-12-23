import axios from "axios";

const DEPARTMENT_REST_API_BASE_URL = 'http://localhost:8080/api/departments'

export const getAllDepartments = () => {
    return axios.get(DEPARTMENT_REST_API_BASE_URL);
}
export const createDepartment = (department) => axios.post(DEPARTMENT_REST_API_BASE_URL,department);
export const getDepartmentById = (departmentId) => {
    return axios.get(DEPARTMENT_REST_API_BASE_URL+'/'+departmentId)
}
export const updateDepartment = (departmentId,department) => {
    return axios.put(DEPARTMENT_REST_API_BASE_URL+'/'+departmentId,department)
}
export const deleteDepartmentById = (departmentId) => {
    return axios.delete(DEPARTMENT_REST_API_BASE_URL+'/'+departmentId);
}