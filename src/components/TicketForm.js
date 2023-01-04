import '../App.css';
import {useState} from 'react';
import Swal from 'sweetalert2'; 
import {BASEURL} from '../utils/constants'

const TicketForm = () =>
{
    const [title, setTitle] = useState([]); 
    const [description, setDescription] = useState([]); 
    let createdDate = new Date(); 

    function enviarCaso() {
        
        let request = {
            title: title, 
            description: description,
            createdDate: createdDate,
            updated: null, 
            closed: null
        }

        console.log(JSON.stringify(request)); 

        fetch(`${BASEURL}/issues`, {
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(request),
            }).then(res => res.json()).then(data => console.log(data)); 

        Swal.fire(
            {
            title: "Tu caso ha sido recibido!",
            text: "Favor de esperar ha ser contactado... ",
            icon: "success",
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#FF6246',
            },
            setTitle(''),
            setDescription('')
          )
    }

    function validarCampos() {
        if (title == "" || description == "") {
            Swal.fire(
                {
                title: "Faltan campos por completar",
                icon: "warning",
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#FF6246',
                }
              )
        } else {
            enviarCaso(); 
        }
    }

    return (
        <div className='Home-Component'>
            <div>
                <br/>
                <h2>Crear Ticket</h2>
                <p>A traves de esta plataforma puedes crear un ticket y nosotros con gusto atenderemos tu solicitud.</p>
                <br/>
                <div className='Formulario'>
                    <h4>Titulo</h4>
                    <input type="text" className='form-control' name="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <br/>
                    <br/>
                    <br/>
                    <h4>Descripcion</h4>
                    <textarea className='text-area' name='description' onChange={(e) => setDescription(e.target.value)} value={description}/>
                    <br/>
                    <br/>
                    <button className='btnEnviarCaso' onClick={() => validarCampos()} >CREAR CASO</button>
                </div>
            </div>
        </div>
        
    ); 
}

export default TicketForm; 
