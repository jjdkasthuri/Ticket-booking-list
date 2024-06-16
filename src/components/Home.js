import React, { Fragment } from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employes from "./Employes";
import { Link,useNavigate} from 'react-router-dom'

function Home(){

    let history = useNavigate();

    const handleEdit = (id, name, age) =>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Id',id);
    }

    const handleDelete = (id) => {
        var index = Employes.map(function(e){
            return e.id
        }).indexOf(id);

        Employes.splice(index,1);

        history('/');

    }

    return(
        <Fragment>
             <h1 style={{margin:"5rem"}}>Booking List</h1>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Ticket No
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employes && Employes.length > 0
                            ?
                            Employes.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button onClick={() => handleEdit(item.id,item.Name,item.Age)}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No Data Avalible"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className='d-grid gap-2' to="/create">
                    <Button size="lg">Create</Button>
                </Link>
                <br></br>
                <br></br>
               
                <br></br>
                <br></br>
                <br></br>
                <br></br>

               <h10>@Cord By - <b>JJDKasthuri</b></h10>
            </div>
        </Fragment>
    )
}
export default Home;