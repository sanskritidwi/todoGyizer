import React, { useState } from "react";
import cross from "../assets/cross.png";
import edit from "../assets/Edit.png";

function TaskCard({ data, onDelete, index, onSave }) {
  //hooks
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...data });

  //handle functions
  const handleClosePopup = () => {
    setIsDeletePopupOpen(false);
  };

  const handleDelete = () => {
    onDelete(index);
    setIsDeletePopupOpen(false);
  };

  const handleSave = () => {
    onSave(index, editedTask);
    setIsEditPopupOpen(false);
  };

  //renderFunctions

  const renderCard = () => {
    return (
      <>
        <div>
          <div className="title"> {data.title.length < 10
              ? data.title
              : data.title.substring(0, 10) + "..."}</div>
          <div className="desc">
            {data.desc.length < 20
              ? data.desc
              : data.desc.substring(0, 20) + "..."}
          </div>
        </div>
        <div>
          <button
            className="addBtn"
            onClick={() => {
              setIsEditPopupOpen(true);
            }}
          >
            <img src={edit} alt="noimg" />
          </button>
          <button
            className="addBtn"
            onClick={() => {
              setIsDeletePopupOpen(true);
            }}
          >
            <img src={cross} alt="noimg" />
          </button>
        </div>
      </>
    );
  };

  const renderDeletePopup = () => {
    if (!isDeletePopupOpen) return null;
    return (
      <>
        {" "}
        <div className="popup">
          <div className="popup-content">
            <div>Delete this task?</div>
            <button className="addBtn" onClick={handleClosePopup}>
              No
            </button>
            <button className="addBtn" onClick={handleDelete}>
              Yes
            </button>
          </div>
        </div>
      </>
    );
  };

  const renderEditPopup = () => {
    if (!isEditPopupOpen) return null;
    return (
      <>
        <div className="popup">
          <div className="popup-content">
            <div>
              <input
                type="text"
                value={editedTask.title}
                onChange={(e) =>
                  setEditedTask({ ...editedTask, title: e.target.value })
                }
              />
            </div>
            <div>
              <textarea
                className="desc"
                value={editedTask.desc}
                onChange={(e) =>
                  setEditedTask({ ...editedTask, desc: e.target.value })
                }
              />
            </div>
            <button
              className="addBtn"
              onClick={() => setIsEditPopupOpen(false)}
            >
              Cancel
            </button>
            <button className="addBtn" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="TaskCardWrapper">
      {renderCard()}
      {renderDeletePopup()}
      {renderEditPopup()}
    </div>
  );
}

export default TaskCard;
