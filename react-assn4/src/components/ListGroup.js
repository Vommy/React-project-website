import Button from "./Button";
/**
 * @author Veren Villegas 1574646
 */

/**
 * A component for a list of items to display.
 * @param {*} items The array of projects or items to display. 
 * @returns The ListGroup component.
 */
function ListGroup(props){
    /**
     * Returns a list of items to display. 
     * Based on Bootstrap's listgroup component.
     */
    return(
        <ul className="list-group">
            {props.items.map((item) => 
            <li className='list-group-item' key={item.projectIdentifier}>
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">{item.projectName}</h5>
                    <p className="card-text">Start Date: {item.start_date}</p>
                    <p className="card-text">Start Date: {item.end_date}</p>
                    <Button buttonText="Delete" buttonColor="danger" onClick={() => props.deleteListItem(item)}/>
                    <Button buttonText="Learn More" buttonColor="primary" onClick={() => props.showMoreInfo(item)}/>
                    </div>
                </div>
            </li>
            )}
        </ul>
    );
}

export default ListGroup;