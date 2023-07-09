import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import { Link, } from 'react-router-dom';
import '../components/css/delete_user.css';

export default function TableRows(props,key) {
    const { pk , fname ,pname , mname , age , mobile , email ,click } = props;

    return (
    <>
    <tr>
    <td>{pk}</td>
    <td>{fname}</td>
    <td>{pname}</td>
    <td>{mname}</td>
    <td>{age}</td>
    <td>{mobile}</td>
    <td>{email}</td>
    <td> <Link to={`updateUser/${pk}`} className='text-warning'> <FontAwesomeIcon icon={faPenToSquare} /> </Link></td>    
    <td className='text-danger' onClick={()=>click(fname,pk)} ><FontAwesomeIcon icon={faTrash} className='delete-user-button' /></td>
    </tr>
    </>
  )
}
