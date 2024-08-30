import React, { useContext } from 'react'
import Notecontext from "../context/notes/Notecontext";

 const Noteitem = (props) => {  
  const context = useContext(Notecontext);
  //here we do destructuring 
   const {deleteNote} = context;
   const {note ,updateNote} = props;
  return (
    <div className="col-md-3">
      
      <div className= "card my-3">
  <div className="card-body">
  <div className="d-flex aling-items-center">
    <h5 className="card-title">{note.title}</h5><i className="fa-solid fa-trash-can-arrow-up mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully" , "Success");}}></i>
    <i className="fa-solid fa-pencil fa-shake mx-2"onClick={()=>{updateNote(note);}}></i>
      </div>
    <p className="card-text">{note.description}</p>
    
  </div>
</div>
    </div>
  );
}

export default Noteitem;
