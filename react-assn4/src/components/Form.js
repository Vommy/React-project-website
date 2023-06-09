/**
 * @author Veren Villegas 1574646
 */

import {React, useState} from 'react';

function Form(props){

    /**
     * Intializing the project state for this form component.
     * Sapna, J.(2023). Lecture 1 Example Code - Event Handling & Forms[Lecture Handout Code]. Moodle. https://elearn.waikato.ac.nz/mod/folder/view.php?id=1657282
     */
    const [project, setProject] = useState({
        projectName: '',
        description: '',
        start_date: '',
        end_date: ''
      });

      /**
       * Prevents default form submission,
       * then creates a new project and uses the props.addProject() 
       * from the App.js file to add the project to the list of projects.
       * @param {*} e 
       */
      const handleAdd = (e) => {
        e.preventDefault();
        let tempProject = {
          projectName: project.projectName,
          description: project.description,
          start_date: project.start_date,
          end_date: project.end_date
        };

        props.addProject(tempProject);
        
        setProject({
            projectName: '',
            description: '',
            start_date: '',
            end_date: ''
        });
    }

    /**
     * Dynamically changes the state of the project state when the user types in values on the form.
     * @param {*} e 
     */
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
    
        setProject((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
    

      /**
       * The form component to return. 
       * Based on BootStrap's Modal Component.
       */
    return(
        <>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Project</button>

        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">New Project</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form id="newProjectForm" noValidate onSubmit={handleAdd}>
                        <label htmlFor='projectName'>Project Name:</label>
                        <input id="projectName" type="text" className="form-control" name="projectName" value={project.projectName} onChange={handleChange}/>
                        <label htmlFor='projectDesc'>Project Description:</label>
                        <input id="projectDesc" type="text" className="form-control" name="description" value={project.description} onChange={handleChange}/>
                        <label htmlFor='projectStartDate'>Project Start Date:</label>
                        <input id="projectStartDate" type="date" className="form-control" name='start_date' value={project.start_date} onChange={handleChange}/>
                        <label htmlFor='projectEndDate'>Project End Date:</label>
                        <input id="projectEndDate" type="date" className="form-control" name='end_date' value={project.end_date} onChange={handleChange}/>
                    </form>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" form='newProjectForm'>Save changes</button>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Form;