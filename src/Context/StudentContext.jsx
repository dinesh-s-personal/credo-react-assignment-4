import React from "react";

export const StudentListContext = React.createContext({
    form: {},
    setForm: () => false,
    
    studentList: [],
    setStudentList: () => false,
});