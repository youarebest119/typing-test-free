"use client"

// import React from 'react'
// import Select from "react-select";
// import { Button } from 'react-bootstrap'
// import { useFormik } from 'formik';
// import { LEVELS, ROUTES } from './utils/constants';
// import { getSelectValue } from './utils/utils';
// import { useNavigate } from 'react-router-dom';

// const Homepage = () => {
//     const navigate = useNavigate();
//     const options = [
//         { value: 10, label: "10 Sec" },
//         { value: 60, label: "1 Min" },
//         { value: 120, label: "2 Min" },
//         { value: 300, label: "5 Min" },
//     ]
//     const levels = [
//         { value: LEVELS.EASY, label: "Easy" },
//         { value: LEVELS.MEDIUM, label: "Medium" },
//         { value: LEVELS.HARD, label: "Hard" },
//     ]
//     const formik = useFormik({
//         initialValues: {
//             duration: 60,
//             level: LEVELS.MEDIUM,
//         },
//         onSubmit: ({ duration, level }) => {
//             navigate(ROUTES.TEST.replace(":level", level).replace(":duration", duration))
//         }
//     })
//     return (
//         <div className='homepage'>
//             <div className="custom_card">
//                 <h2 className="mb-5 text-center">Start Typing Test</h2>
//                 <form onSubmit={formik.handleSubmit}>
//                     <Select
//                         options={options}
//                         value={getSelectValue(options, formik.values.duration)}
//                         name="duration"
//                         onChange={option => formik.setFieldValue("duration", option.value)}
//                         placeholder="Select Duration"
//                     />
//                     <Select
//                         options={levels}
//                         value={getSelectValue(levels, formik.values.level)}
//                         className='mt-5'
//                         name="level"
//                         onChange={option => formik.setFieldValue("level", option.value)}
//                         placeholder="Select level"
//                     />
//                     <button type="submit" className='mt-5 w-100 custom_btn'>Start</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Homepage
