import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../partials/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactById, getContactList } from '../../features/contact/contactThunks';
import Loading from '../partials/Loading';
import { orderUsersBy } from '../../utils/orderUsersBy';

const ContactList = () => {
  const { data, status } = useSelector(state => state.contact);
  const [contacts, setContacts] = useState([]);
  const [showContacts, setShowContacts] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [changeBy, setChangeBy] = useState('all');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getContactList());
    }
    setContacts(orderUsersBy(changeBy, [...data]));
    setPagination(1);
    // eslint-disable-next-line
  }, [data, changeBy])

  useEffect(() => {
    let index = pagination === 1 ? 0 : (pagination-1)*10;
    setShowContacts(contacts.slice(index, index+10));
  }, [pagination, contacts])

  const handleArchive = (e, contactId) => {
    // dispatch(deleteContactById(contactId));
    e.stopPropagation(e);
  }

  return (
    <div className='list'>
      <div className='list__top'>
        <ul className='list__top__menu'>
          <li className={`list__top__menu__item ${changeBy !== 'active' && changeBy !== 'inactive' ? 'list__top__menu__item--active' : ''}`} 
            onClick={() => setChangeBy('all')}
          >All Contacts</li>
          <li className={`list__top__menu__item ${changeBy === 'active' ? 'list__top__menu__item--active' : ''}`} 
            onClick={() => setChangeBy('active')}
          >Archived</li>
        </ul>
        <div className='d-flex-center'>
          <Link to='/contact/create' className='rooms__new-room'>New Contact +</Link>
          <select className='list__top__select' value={changeBy} onChange={(e) => setChangeBy(e.target.value)}>
            <option className='list__top__select__text' value="date">Start Date</option>
            <option className='list__top__select__text' value="name">Name</option>
          </select>
        </div>
      </div>
      <div className='list__table'>
        <div className='list__table__row list__table__row--first'>
          <p className='list__table__row__item weight-700'>Date</p>
          <p className='list__table__row__item weight-700'>Customer</p>
          <p className='list__table__row__item weight-700'>Subject & Comment</p>
          <p className='list__table__row__item'></p>
        </div>
        <ul style={{ listStyle: 'none' }}>
          { status === 'pending' && <Loading /> }
          {showContacts.map((contact) => {
            return (
              <div key={contact.id} onClick={() => navigate(`/users/${contact.id}`)} className='list__table__row'>
                <p className='list__table__row__item weight-500'>{contact.date}</p>
                <p className='list__table__row__item weight-600'>
                  {contact.name}
                </p>
                <div className='list__table__row__item contacts__col-cell'>
                  <p className='weight-500'>{contact.subject}</p>
                  <p className='small-text'>{contact.comment}</p>
                </div>
                <div className='list__table__row__item contacts__archive'>
                  <button onClick={handleArchive}>Archive</button>
                </div>
              </div> 
            )})}
        </ul>
      </div>
      <div className='list__bottom'>
        <p className='list__bottom__text'>Showing {showContacts.length} of {data.length} Data</p>
        <Pagination pagination={pagination} setPagination={setPagination} maxPage={contacts.length / 10 + .99} />
      </div>
    </div>
  )
}

export default ContactList