import '../App.css'; 
import { useEffect, useState } from 'react';
import { BASEURL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import { getDates } from '../utils/getDates';

const EditTicket = () => {
    /* Extract URL ID */
    const urlData = useParams(); 
    const [ticketDetails, setTicketDetails] = useState([]);

    //console.log(urlData.id);

    useEffect(() => {
        fetch(`${BASEURL}/issues/${urlData.id}`)
            .then(res => res.json())
                .then(data => {setTicketDetails(data)}); 
    }, [])
    
    //console.log(ticketDetails);
    return (
        <div className='App'>
            <h1>TICKET DETAILS</h1>
            <hr/>
            <br/>
            <br/>
            <div className='case-box' >
                <div className='EditTicket' >
                    <section className='section1'>
                        <h4>Title: {ticketDetails.title}</h4>
                    </section>
                    <section className='section2' >
                        <h4>Date Created: {getDates(ticketDetails.createdDate)}</h4>
                    </section>
                </div>
                <div className='EditTicket-Details' >
                <div>
                    <h3>Details:  </h3>
                    <p className='ticketDetails'>
                        {ticketDetails.description}
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default EditTicket; 