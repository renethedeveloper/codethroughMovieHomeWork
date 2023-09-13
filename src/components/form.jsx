import React, { useState } from "react";

const  Form= (props) => {

const [formData, setFromData] = useState({searchTerm:""});

const handleChange =(event)=>{
setFromData({...formData,[event.target.name]:event.target.value});
}
const handleSubmit=(event)=>{
    event.preventDefault();
    props.moviesearch(formData.searchTerm);
};

    return (  
       <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name ="searchTerm"
                onChange={handleChange}
                value={formData.searchTerm}/>
            <input type="submit" value="submit" />
        </form>
       </div>
    );
}
 
export default Form ;