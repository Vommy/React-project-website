import '../css/App.css';
import Button from './Button.js';
//import data from '../data.json';
import NavBar from './NavBar';
import ListGroup from './ListGroup.js';
import { useState, useEffect, React } from 'react';
import {without } from "lodash"

function App() {

  const[listItems, setListItems] = useState([]);

  /**
   * Get the data from the data.json file.
   */
  useEffect(() => {
    const getData = async() => {
      let response = await fetch('/data.json')
      let data = await response.json();
      const tempProjects = data.map((item) => {
        return item;
      })
      console.log(data);
      setListItems(tempProjects);
      return data;
      }
      getData();
    }, []
    )

     /**
      * Deletes an item from this list group.
      * @param {*} item The item to remove.
      */
     const deleteListItem = (item) => {
         const tempProject = without(listItems, item);
         setListItems(tempProject);
     }
 
     /**
      * Shows more info about a project as an alert message.
      * @param {*} item 
      */
     const showMoreInfo = (item) => {
         alert("Project Start Date: " + item.start_date + "\nProject End Date: " + item.end_date);
     }

  return (
    <>
      <NavBar 
        navTitle={"Projects"} 
        dropFilter={"Filter by"}
        items={listItems}/>
      <ListGroup 
      items={listItems}
      deleteListItem={deleteListItem}
      showMoreInfo={showMoreInfo}/>
      </>
  );
}

export default App;
