import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../partials/Pagination';
import { archiveContactById, getContactList } from '../../features/contact/contactThunks';
import Loading from '../partials/Loading';
import moment from 'moment';
import { sortOrFilterContactsBy } from '../../utils/sortOrFilterContactsBy';
import ContactCards from './ContactCards';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Contact } from '../../types/features';

const ContactList = () => {
  const { data, status } = useAppSelector(state => state.contact);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [showContacts, setShowContacts] = useState<Contact[]>([]);
  const [pagination, setPagination] = useState(1);
  const [sortOrFilterBy, setSortOrFilterBy] = useState('newest');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getContactList());
    }
    setContacts(sortOrFilterContactsBy(sortOrFilterBy, [...data]));
    setPagination(1);
    // eslint-disable-next-line
  }, [data, sortOrFilterBy])

  useEffect(() => {
    let index = pagination === 1 ? 0 : (pagination-1)*10;
    setShowContacts(contacts.slice(index, index+10));
  }, [pagination, contacts])

  const handleArchive = (e: React.MouseEvent<HTMLButtonElement>, contactId: string) => {
    dispatch(archiveContactById(contactId));
    e.stopPropagation();
  }

  return (
    <>
      <ContactCards />
      <div className='list'>
        <div className='list__top'>
          <ul className='list__top__menu'>
            <li className={`list__top__menu__item ${sortOrFilterBy !== 'archived' ? 'list__top__menu__item--active' : ''}`} 
              onClick={() => setSortOrFilterBy('newest')}
            >All Contacts</li>
            <li className={`list__top__menu__item ${sortOrFilterBy === 'archived' ? 'list__top__menu__item--active' : ''}`} 
              onClick={() => setSortOrFilterBy('archived')}
            >Archived</li>
          </ul>
          <div className='d-flex-center'>
            <Link to='/contact/create' className='list__top__new-room'>New Contact +</Link>
            <select className='list__top__select' value={sortOrFilterBy} onChange={(e) => setSortOrFilterBy(e.target.value)}>
              <option className='list__top__select__text' value="newest">Newest</option>
              <option className='list__top__select__text' value="oldest">Oldest</option>
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
            {
              showContacts.length === 0 &&
              <p className='list__table__nothing'>Nothing to show here</p>
            }
            {showContacts.map((contact) => {
              return (
                <div key={contact.id} onClick={() => navigate(`/contact/${contact.id}`)} className='list__table__row'>
                  <p className='list__table__row__item weight-500'>{moment(contact.date).format('MMM Do, YYYY')}</p>
                  <p className='list__table__row__item weight-600'>
                    {contact.name}
                  </p>
                  <div className='list__table__row__item contacts__col-cell'>
                    <p className='weight-500'>{contact.subject}</p>
                    <p className='small-text'>{contact.comment}</p>
                  </div>
                  <div className='list__table__row__item contacts__archive'>
                    <button onClick={(e) => handleArchive(e, contact.id)}>Archive</button>
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
    </>
  )
}

export default ContactList