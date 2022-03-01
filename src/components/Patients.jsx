

const Patients = ({patient, setPatient, deletePatient}) => {
    const {name, owner, email, date, symptoms, id}= patient

    
  return (
    <div className=" bg-white mx-5 px-5 py-10 mb-5 shadow-md rounded-md">
        <p className=" mb-3 uppercase font-bold text-gray-700"> Name: {""}
            <span className=" font-normal normal-case">{name}</span>
        </p>

        <p className=" mb-3 uppercase font-bold text-gray-700"> Owner: {""}
            <span className=" font-normal normal-case">{owner}</span>
        </p>

        <p className=" mb-3 uppercase font-bold text-gray-700"> Email: {""}
            <span className=" font-normal normal-case">{email}</span>
        </p>

        <p className=" mb-3 uppercase font-bold text-gray-700"> Date: {""}
            <span className=" font-normal normal-case">{date}</span>
        </p>

        <p className=" mb-3 uppercase font-bold text-gray-700"> Symptoms: {""}
            <span className=" font-normal normal-case">{symptoms}</span>
        </p>
        <div className="flex justify-between ">
            <button 
                type="button" 
                className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg uppercase font-bold"
                onClick={()=>setPatient(patient)} 
            >
                Edit
            </button>
            <button 
            type="button"
            className=" py-2 px-10 bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg uppercase font-bold" 
            onClick={()=>deletePatient(id)}
            >
                Delete
            </button>
        </div>
    </div>
  )
}

export default Patients;
