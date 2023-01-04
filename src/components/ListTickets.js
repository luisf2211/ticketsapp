import { useEffect, useState } from 'react';
import {BASEURL} from '../utils/constants'
import '../App.css'; 
import getDates from '../utils/getDates';
import { Link } from 'react-router-dom';

const ListTickets = () => {

    const [issues, setIssues] = useState([]); 
    let caseId;  

    /* FORMAT DATES INTO LOCAL FORMART */
    function getDates(issues) {
        const dateFormat = new Date(issues);
        if (issues == null) {
            return '-'; 
        } else {
            let dateFormated = dateFormat.getDay() + "/"+ dateFormat.getMonth() + "/"+ dateFormat.getFullYear(); 
            return dateFormated;
        }
    }

     
    useEffect(() => {
        fetch(`${BASEURL}/issues`).then(res => res.json())
            .then(data => {setIssues(data)}); 
    },[])
    return (
        <div className='AppTable'>
            <h1>TICKETS</h1>
            <hr/>
            <p> Solicitudes registradas: {issues.length} </p>
            <br/>
            <div className='div1'>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Closed</th>
                    <th>Action</th>
                </tr>
                {issues.map(issue => {
                    return(<tr key={issue.id}>
                    <td>{issue.id}</td>
                    <td>{issue.title}</td>
                    <td>{getDates(issue.createdDate)}</td>
                    <td>{getDates(issue.updated)}</td>
                    <td>{getDates(issue.closed)}</td>
                    <td><Link to={`/tickets/${issue.id}`}><button className='detailsBtn'>Editar</button></Link></td>
                </tr>)})}
                
            </table>
            </div>
            
        </div>
    )
}

export default ListTickets; 