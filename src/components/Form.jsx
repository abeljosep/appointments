import {useState, useEffect} from "react";
import Error from "./Error"

const  Form = ({patients, setPatients, patient, setPatient}) => {
    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [symptoms, setSymptoms] = useState("");

    const [error, setError] = useState(false);
    
    
    useEffect(()=>{
        if(Object.keys(patient).length > 0){
            setName(patient.name)
            setOwner(patient.owner)
            setEmail(patient.email)
            setDate(patient.date)
            setSymptoms(patient.symptoms)
        }

    }, [patient])
    
    const generateID = () =>{
        const newDate = Date.now().toString(36);
        const randomKey = Math.random().toString(36).substring(2);
    
        return newDate + randomKey;
    
    }

const handleSubmit = (e) =>{
        e.preventDefault()
        if(!name||!owner||!email||!date||!symptoms){
            
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 3000);
            return;
        }
        setError(false)

        const petObject = {
            name,
            owner,
            email,
            date,
            symptoms,
            

        }

        if(patient.id){
            //Edit Patient
            petObject.id = patient.id
            const updatedPatient = patients.map(patientState => patientState.id === patient.id ? petObject : patientState)
            console.log(updatedPatient)
            setPatients(updatedPatient)
            setPatient({})
        }else{
            //Adding Patient
            petObject.id = generateID()
            setPatients([...patients, petObject])
            console.log(patients)
        }
        
        setName("")
        setOwner("")
        setEmail("")
        setDate("")
        setSymptoms("")


}

  return (
    <div className=" mb-5 md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-center text-3xl">Patients Follow-Up</h2>
        
        <p className=" text-lg mt-5 text-center mb-10">Add and Manage {""} 
            <span className=" text-indigo-600 font-bold">Patients</span>
        </p>

        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5"
            onSubmit={handleSubmit}    
        >
            {error && <Error mensaje="All Fields Are Required"/>         }
            <div className="mb-5">
                <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
                    Pet's Name
                </label>
                <input
                    id="pet"
                    className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
                    Pet's Owner Name
                </label>
                <input
                    id="owner"
                    className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text"
                    placeholder="Owner's name"
                    value={owner}
                    onChange={e=>setOwner(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                    Email
                </label>
                <input
                    id="email"
                    className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="appointment" className="block text-gray-700 uppercase font-bold">
                    Appointment's Date
                </label>
                <input
                    id="appointment"
                    className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="date"
                    value={date}
                    onChange={e=>setDate(e.target.value)}
                    
                />
            </div>

            <div className="mb-5">
                <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
                    Symptoms
                </label>
                <textarea
                    id="symptoms"
                    className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe Symptoms Here"
                    value={symptoms}
                    onChange={e=>setSymptoms(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                className=" bg-indigo-600 w-full p-3 rounded-sm text-white font-bold hover:bg-indigo-700 cursor-pointer ease-out duration-300"
                value={patient.id ? "Edit Patient" : "Add Patient"}
            
            />


        </form>
    </div>
  )
}

export default Form
