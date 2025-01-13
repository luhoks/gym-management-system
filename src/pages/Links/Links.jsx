import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa"; // Import pencil icon
import "./Links.css";

const LinksTab = () => {
  const [showAddLinkModal, setShowAddLinkModal] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]); // Array to store link objects
  const [isEditing, setIsEditing] = useState(false); // Track if editing
  const [editIndex, setEditIndex] = useState(null); // Track index of the link being edited

  const handleAddLinkClick = () => {
    setShowAddLinkModal(true);
    setIsEditing(false); // Ensure it's for adding, not editing
    setTitle("");
    setLink("");
  };

  const handleEditLinkClick = (index) => {
    setShowAddLinkModal(true);
    setIsEditing(true); 
    setEditIndex(index); // Set index of the link being edited
    setTitle(links[index].title); // Pre-fill title
    setLink(links[index].link); // Pre-fill link
  };

  const handleSaveLink = () => {
    if (title && link) {
      if (isEditing) {
        // Update the existing link
        const updatedLinks = [...links];
        updatedLinks[editIndex] = { title, link };
        setLinks(updatedLinks);
      } else {
        // Add a new link
        setLinks([...links, { title, link }]);
      }

      // Reset form
      setTitle("");
      setLink("");
      setShowAddLinkModal(false);
    }
  };

  const handleCloseModal = () => {
    setTitle(""); // Clear the form
    setLink("");
    setShowAddLinkModal(false);
  };

  return (
    <div className="links-container">
      <header className="top-header">Links</header>

      <div className="links-content">
        <div className="announcement-section">
          <div className="card">
            <h3 className="card-title">Announcement</h3>
            {links.length > 0 && (
              <div className="link-item">
                <span className="link-title">{links[0].title}</span>
                <a href={links[0].link} className="link" target="_blank" rel="noopener noreferrer">
                  {links[0].link}
                </a>
                <button className="edit-btn" onClick={() => handleEditLinkClick(0)}>
                  <FaPencilAlt className="pencil-icon" />
                </button>
              </div>
            )}
            <button className="add-link-btn" onClick={handleAddLinkClick}>
              + Add Link
            </button>
          </div>
        </div>

        <div className="latest-section">
          <div className="card">
            <h3 className="card-title">Latest</h3>
            {links.slice(1).map((item, index) => (
              <div className="link-item" key={index + 1}>
                <span className="link-title">{item.title}</span>
                <a href={item.link} className="link" target="_blank" rel="noopener noreferrer">
                  {item.link}
                </a>
                <button className="edit-btn" onClick={() => handleEditLinkClick(index + 1)}>
                  <FaPencilAlt className="pencil-icon" />
                </button>
              </div>
            ))}
            <button className="add-link-btn" onClick={handleAddLinkClick}>
              + Add Link
            </button>
          </div>
        </div>
      </div>

      {showAddLinkModal && (
        <div className="modal">
          <div className="modal-content">
            <h3 className="modal-title">{isEditing ? "Edit Link" : "Add Link"}</h3>
            <div className="thumbnail-section">
              <div className="thumbnail-placeholder">
                <span>+</span>
                <p>Add Thumbnail</p>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Title"
              />

              <label htmlFor="link">Link</label>
              <input
                type="text"
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Enter Link"
              />

              <button type="button" className="save-btn" onClick={handleSaveLink}>
                Save
              </button>
              <button type="button" className="delete-btn" onClick={handleCloseModal}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinksTab;
