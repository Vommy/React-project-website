import '../css/App.css';
import NavBar from './NavBar';
import ListGroup from './ListGroup.js';
import Form from './Form.js';
import { useState, useEffect, React } from 'react';
import {without } from "lodash"
/**
 * @author Veren Villegas 1574646
 */
function App() {

  const[listItems, setListItems] = useState([]);

  /**
   * Adds a project to the list of projects by creating a new array of projects through array destructuring.
   * @param {*} project The project to add.
   */
  const addProject = (project) =>{
    project.projectIdentifier = listItems.length + 1;
    const tempProjects = [...listItems, project];
    setListItems(tempProjects);
  }

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
   * Sorts the items either by date or by name in either ascending or descending order.
   * @param {string} type The type to sort by. Either 'name or 'date'.
   * @param {int} order 1 For descending order, 0 for ascending order.
   */
  const sortItems = (type, order) => {
    let tempProjects
    if(type === 'name'){
      if(order === 1){
        tempProjects = [...listItems].sort((b,a) => a.projectName.localeCompare(b.projectName));
      }
      else{
        tempProjects = [...listItems].sort((b,a) => b.projectName.localeCompare(a.projectName));
      }
    }
    else{
      if(order === 1){
        tempProjects = [...listItems].sort((b,a) => new Date(a.start_date) - new Date(b.start_date));
      }
      else{
        tempProjects = [...listItems].sort((b,a) => new Date(b.start_date) - new Date(a.start_date));
      }
    }
    console.log(tempProjects);
    setListItems(tempProjects);
  }

     /**
      * Deletes an item from the list of projects and sets its state.
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
    alert(item.description);
  }

  /**
   * The application to return. 
   */
  return (
    <>
      <NavBar 
        navTitle={"Projects"} 
        dropFilter={"Filter by"}
        items={listItems}
        sortItems={sortItems}
        addProject={addProject}/>
      <ListGroup 
      items={listItems}
      deleteListItem={deleteListItem}
      showMoreInfo={showMoreInfo}/>
      </>
  );
}

export default App;
