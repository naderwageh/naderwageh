
import "./LongFormStyle.css"
import Model from "./Model"
import { useState } from "react"

export default function LongForm() {
    const [ErrorMessage,seterrormessage]=useState(null)
    const[shwomodel,setshowmodel]=useState(false)   
    const [longInputs, setlongInputs] = useState({
        name: '',
        PhoneNumbr: '',
        Age: '',
        isEmpolyee: false,
        salyrereang: ""
    })
    function handletform(event) {
        event.preventDefault() 
        seterrormessage(null)
      const {Age,PhoneNumbr}=longInputs
        if (Age <18 || Age > 100 ) {
            seterrormessage("the age is not allowed")
            
        }else if(PhoneNumbr.length<10||PhoneNumbr.length>12){
            seterrormessage("Phone Numbr format is incorrect")
        }
        setshowmodel(true)
    }
    const btns = longInputs.name == "" || longInputs.PhoneNumbr == "" || longInputs.Age == "";
    let btnclass = ""
    if (btns) {
        btnclass = "disabl"
    } else {
        btnclass = ""
    }
    function handformclick() {
        if (shwomodel) {
            setshowmodel(false)
        }
       
        
    }
    return (
        <div onClick={handformclick} className="flex"  >
            <form id="long" className="flex">
                <h1>Requesting a Loan</h1>
                <hr />
                <label>name:</label>
                <input value={longInputs.name} onChange={(event) => {
                    setlongInputs({ ...longInputs, name: event.target.value });
                }}
                />

                <label>PhoneNumbr:</label>
                <input value={longInputs.PhoneNumbr} onChange={(event) => {
                    setlongInputs({ ...longInputs, PhoneNumbr: event.target.value });
                }} />

                <label>Age:</label>
                <input value={longInputs.Age} onChange={(event) => {
                    setlongInputs({ ...longInputs, Age: event.target.value });
                }} />
                <label style={{ marginTop: "30px" }}>Are you an employee:</label>
                <input type="checkbox" checked={longInputs.isEmpolyee} onChange={(event) => {
                    setlongInputs({ ...longInputs, isEmpolyee: event.target.checked })
                }} />
                <label>salaye:</label>
                <select value={longInputs.salyrereang} onChange={(event) => {
                    setlongInputs({ ...longInputs, salyrereang: event.target.value });
                }} >
                    <option>less than $500</option>
                    <option>between 500$ and $2000</option>
                    <option>above $2000</option>
                </select>
                <button className={btnclass} onClick={handletform} disabled={btns} id="supmit-long-bot">supmit</button>
            </form>
            <Model ErrorMessage={ErrorMessage}isvisible={shwomodel}/>
        </div>
    )

}