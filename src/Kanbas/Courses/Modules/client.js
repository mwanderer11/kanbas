import axios from "axios";
//const COURSES_URL = 'https://kanbas-node-server-app-2-ztmm.onrender.com/api/courses';
//const MODULES_URL = 'https://kanbas-node-server-app-d13q.onrender.com/api/modules';
console.log(process.env.REACT_APP_API_BASE);
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = `${API_BASE}/courses`;
const MODULES_URL = `${COURSES_URL}/modules`;

export const findModulesForCourse = async (courseId) => {
    const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
    return response.data;
};

export const createModule = async (courseId, module) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/modules`,
        module
    );
    return response.data;
};

export const deleteModule = async (moduleId) => {
    const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
    return response.data;
};

export const updateModule = async (module) => {
    const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
};


