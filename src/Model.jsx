import "./LongFormStyle.css"
// eslint-disable-next-line react/prop-types
export default function Model({isvisible,ErrorMessage=null}) {
    if (isvisible) {
        return(
            <div id="model">
                <div id="model-contect">
                    {/* <h1>the form been supmitted successfully</h1> */}
                    <h1 style={{color:ErrorMessage?"red":"green"}}>{ErrorMessage!=null?ErrorMessage:"the form been supmitted successfully"}</h1>
                </div>
            </div>
        )
    }else{
        return(<></>)
    }

}