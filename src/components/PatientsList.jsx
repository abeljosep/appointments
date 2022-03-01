import { useEffect } from "react"
import Patients from "./Patients"



const PatientsList = ({patients, setPatient, deletePatient}) => {
  
  return (
  
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {patients.length ? (
        <> 
          <h2 className=" font-black text-3xl text-center">Patient Lists</h2>
          <p className=" text-center mt-5 text-lg mb-10">
            Manage Your {""}
            <span className=" text-indigo-600 font-bold">Patients and Dates</span>
          </p>

          {patients.map(patient => (
            <Patients
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
              
            />
          ))}
        </>  
      )
      
      : (
        <>
          <h2 className=" font-black text-3xl text-center">Patient Lists</h2>
          <p className=" text-center mt-5 text-lg mb-10">
            Add A {""}
            <span className=" text-indigo-600 font-bold">New Patient</span>
          </p>

          
        </>
      )}
     
    </div>
  )
}

export default PatientsList
