import React, { useState } from "react";
import "./CharacterList.css";
import data from "../../data/data.json";
import Modal from "../Modals/CharacterDetailmodal";


const CharacterList = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="home-container">
      <header className="head-container">
        <h3>Characters</h3>
      </header>
      <div className="tool-container">
        <div className="search-sort">
          <div className="search-box">
            <p>Search</p>
            <input className="input-box" />
          </div>
          <div className="sort-box">
            <p>sort by</p>
            <select className="sort-drop-down">
              <option value="" disabled selected hidden className="place-hlder">
                by name (asc/desc)
              </option>
              <option value="hello">ascending</option>
              <option value="hehe">descending</option>
            </select>
          </div>
        </div>

        <div className="race-gender-btn">
          <div className="race-box">
            <p>Race</p>
            <select className="race-select">
              <option value="" disabled selected hidden>
                list of races,multiselection
              </option>
              <option>Human</option>
              <option>Elf</option>
              <option>Dwarf</option>
              <option>Hobbit</option>
              <option>Hobbit</option>
            </select>
          </div>

          <div className="gender-box">
            <p>Gender</p>
            <select className="gender-select">
              <option value="" disabled selected hidden>
                male/female
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="btn-container">
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      </div>

      <div className="characters-list">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Race</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((character) => (
                <tr key={character.id}>
                  <td>{character.id}</td>
                  <td>{character.name}</td>
                  <td>{character.race}</td>
                  <td>{character.gender}</td>
                  <td>
                    <button onClick={handleOpenModal} className="details-btn">Details &gt;&gt;</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


        <Modal show={showModal} handleClose={handleCloseModal}>
          <header className="modal-header">Characters &gt;</header>
          <section className="modal-body">
           <table className="modal-table">
           <thead>
             <th>
              <tr>
                Name
              </tr>
              <tr>
                WikiURL
              </tr>
              <tr>Race</tr>
              <tr>Gender</tr>
              <tr>Height</tr>
              <tr>Hair</tr>
              <tr>Realm</tr>
              <tr>Birth</tr>
              <tr>Spouse</tr>
              <tr>Death</tr>

             </th>
           </thead>
           

           </table>

          </section>
        </Modal>
     

    </div>
  );
};

export default CharacterList;
