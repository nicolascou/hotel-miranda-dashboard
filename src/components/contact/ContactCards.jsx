import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContactList } from '../../features/contact/contactThunks';
import ContactDetails from './ContactDetails';

const ContactCards = () => {
  const { data, status } = useSelector(state => state.contact);
  const [unreadContacts, setUnreadContacts] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(getContactList());
    } else {
      setUnreadContacts(data.slice().reverse().slice(0, 5));
    }
    // eslint-disable-next-line
  }, [data])

  const handleCheck = (contactId) => {
    setUnreadContacts(unreadContacts.filter(({ id }) => id !== contactId));
  }
  
  return (
    <>{ unreadContacts.length > 0 &&
      <div className='contacts__cards'>
        {
          unreadContacts.map((contact) => (
              <div key={contact.id} className='contacts__cards__card'>
                <p className='contacts__cards__card__text'>{contact.comment}</p>
                <div className='contacts__cards__card__flex'>
                  <i className='fa-solid fa-user contacts__cards__card__flex__img'></i>
                  <div className='contacts__cards__card__flex__main'>
                    <p className='contacts__cards__card__flex__main__name'>{contact.name}</p>
                    <p className='contacts__cards__card__flex__main__time'>1 day ago</p>
                  </div>
                  <div className='contacts__cards__card__flex__read'>
                    <i onClick={() => handleCheck(contact.id)} className='fa-regular fa-circle-check contacts__cards__card__flex__read__true'></i>
                    <i onClick={() => handleCheck(contact.id)} className='fa-regular fa-circle-xmark contacts__cards__card__flex__read__false'></i>
                  </div>
                </div>
              </div>
          ))
        }
      </div>}
      <ContactDetails />
    </>
  )
}

export default ContactCards