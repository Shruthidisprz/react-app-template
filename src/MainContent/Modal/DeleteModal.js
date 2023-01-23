import React, { useContext } from "react";
import { DataContext } from "../../DataContext/DataContext";
import { ServiceContext } from "../../DataContext/Services";
import './DeleteModal.scss';
const DeleteModal = () =>{
    const {isId} = useContext(DataContext);
    const {deleteEvent,setOpenDeleteModal} = useContext(ServiceContext);
    return(
        <div className="delete-modal-background">
            <div className="delete-modal-container">
                <div className="delete-modal-body">
                    Are you sure you want to delete?
                </div>
                <div className="delete-modal-footer">
                    <button onClick={()=>deleteEvent(isId)}>Yes</button>
                    <button onClick={()=>setOpenDeleteModal(false)}>No</button>
                </div>
            </div>
        </div>
    )
}
export default DeleteModal;