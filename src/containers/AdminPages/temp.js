
function App(){
    const [data, setData]=useState([]);
    const fetchStudents = ()=>{
        fetch(`${STUDENT_API_URL}`)
        .then(res=>res.json())
        .then(json=>setData(json));
    }
    useEffect(()=>{
        fetchStudents();
    },[]);
    const[inEditMode, setInEditMode]=useState({
        status: false,
        rowKey: null
    });

    const [firstName, setfirstName]=useState(null);

    const onEdit=({id,currentFirstName})=>{
        setInEditMode({
            status: true,
            rowKey: id
        })
        setfirstName(currentFirstName);
    }

    const updateStudentList=({id,newFirstName})=>{
        fetch(`${STUDENT_API_URL}/${id}`,{
            method: "PATCH",
            body: JSON.stringify({
                first_name: newFirstName,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8" 
            }
        })
        .then(response=>response.json())
        .then(json=> {
            onCancel();
            fetchStudents();
        })
    }

    const onSave=(id,newFirstName)=>{
            updateStudentList({id,newFirstName});
    }
    const onCancel=()=>{
        setInEditMode({
            status: false,
            rowKey: null
        })
        setfirstName(null);
    }

    return (
        <div className="container">
            <h1> Student List </h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th> Age </th>
                        <th>Email address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id} </td>
                                <td>
                                    {
                                        inEditMode.status && inEditMode.rowKey ===item.id ? (
                                            <input value={firstName}
                                                onChange={(event)=> setfirstName(event.target.value)}
                                                />
                                        ) : (
                                            item.first_name
                                        )
                                    }
                                </td>
                                <td>{item.last_name}</td>
                                <td>{item.age}</td>
                                <td>{item.email} </td>
                                <td> 
                                    {
                                        inEditMode.status && inEditMode.rowKey === item.id ? (
                                            <React.Fragment>
                                                <button
                                                    className={"btn-sucess"}
                                                    onClick={()=> { onSave(item.id, firstName)}}
                                                >
                                                    Save
                                                </button>

                                                <button
                                                    className={"btn-secondary"}
                                                    style={{marginLeft: 8}}
                                                    onClick={()=>onCancel()}
                                                >
                                                    Cancel
                                                </button>
                                            </React.Fragment>
                                        ) : (
                                            <button 
                                                className={"btn-primary"}
                                                onClick={() => onEdit({id: item.id, currentFirstName: item.first_name})}
                                            >
                                                Edit First Name
                                            </button>
                                        )
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App;