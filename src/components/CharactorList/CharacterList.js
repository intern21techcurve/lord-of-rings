import React from 'react'
import "./CharacterList.css"
import data from "../../data/data.json";

const CharacterList = () => {




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
            <thead >
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Race</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((character)=>(
                <tr key={character.id}> 
            
                  <td>{character.id}</td>
                  <td>{character.name}</td>
                  <td>{character.race}</td>
                  <td>{character.gender}</td>
                  <td>
                    <a href='.'>Details &gt;&gt;</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CharacterList
