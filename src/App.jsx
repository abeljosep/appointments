import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PatientsList from './components/PatientsList';




function App() {
  //const [count, setCount] = useState(0)
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  useEffect(() => {
    
    const myStorage = JSON.parse( localStorage.getItem("Pets"))
    setPatients(myStorage)
    
  }, []);
  

  useEffect(() => {
    
    localStorage.setItem("Pets", JSON.stringify(patients))
    
  }, [patients]);
  

  const deletePatient= (id)=>{
    const updatedPatient = patients.filter(patientState=> patientState.id !== id);
    setPatients(updatedPatient)
    
}

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
          
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
