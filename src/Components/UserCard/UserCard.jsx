import React, { useState } from 'react'
import './UserCard.css';
import DArrow from '../../assets/img/down-arrow.svg';
import UArrow from '../../assets/img/up-arrow.svg';
import Delete from '../../assets/img/delete.svg';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/User/actions';

const UserCard = ({data}) => {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  }

  return (
    <div className={`user-card ${click && 'is-active'} `}>
      <p><span className='title'>Name :</span> {data.name}</p>
      <p><span className='title'>Email :</span> {data.email}</p>
      {click &&
      <>  
        <p><span className='title'>Phone :</span> {data.phone}</p>
        <p><span className='title'>Address :</span> { data.address}</p>
        </>
      }
      <div className='actions' >
        <span title={click ? 'less' : 'more'} style={{ margin: '.25rem .5rem', cursor: 'pointer' }} onClick={() => setClick(!click)} >
          {click ? 
            <img height='15' alt='up'  src={UArrow}/>
            :
            <img height='15' alt='down' src={DArrow} />
          }
        </span>
        <span className='delete' title='Delete' onClick={() => handleDelete(data.id)}  >
          <img height='20' alt='down' style={{color: 'red'}} src={Delete} />
        </span>
      </div>
    </div>
  )
}

export default UserCard