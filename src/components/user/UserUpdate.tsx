import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../../features/users/userThunks';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const UserUpdate: React.FC = () => {
  const { data } = useAppSelector(state => state.user);
  const params = useParams();
  const user = data.find(({ id }) => id === Number(params.id));
  const formRef = useRef(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (formRef.current) {
      e.preventDefault();
      const formData = new FormData(formRef.current);
      const newUser = {
        "id": Number(params.id),
        "full_name": formData.get('full_name')?.toString(),
        "username": formData.get('username')?.toString(),
        "position": formData.get('position')?.toString(),
        "photo": formData.get('image')?.toString(),
        "email": formData.get('email')?.toString(),
        "phone": formData.get('phone')?.toString(),
        "description": formData.get('description')?.toString(),
        "start_date": user?.start_date || '',
        "state": formData.get('state')?.toString(),
        "password": formData.get('password')?.toString()
      }
      dispatch(updateUser(newUser))
      navigate('/users');
    }
  }

  return (
    <div className='create'>
      <h2 className='create__title'>User Data</h2>
      <form ref={formRef} className='create__form' onSubmit={(e) => handleSubmit(e)}>
        <div className='create__form__grid'>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="full_name">Full name</label>
              <input name='full_name' type="text" id='full_name' defaultValue={user?.full_name} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="email">Email</label>
              <input name='email' type="email" id='email' defaultValue={user?.email} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="image">Image Url</label>
              <input name='image' type="text" id='image' defaultValue={user?.photo} />
            </div>
          </div>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="username">Username</label>
              <input name='username' type="text" id='username' defaultValue={user?.username} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="phone">Phone</label>
              <input name='phone' type="tel" id='phone' defaultValue={user?.phone} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="position">Position</label>
              <select name='position' id='position' defaultValue={user?.position} className='weight-600'>
                <option value="Manager">Manager</option>
                <option value="Room Service">Room Service</option>
                <option value="Receipt">Receipt</option>
              </select>
            </div>
          </div>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="password">Password</label>
              <input name='password' type="password" id='password' defaultValue={user?.password} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="state">State</label>
              <select name='state' id='state' defaultValue={user?.state} className='weight-600'>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="description">Description of job</label>
              <textarea name='description' id="description" defaultValue={user?.description} cols={30} rows={5}></textarea>
            </div>
          </div>
        </div>
        <button type='submit' className='create__form__btn'>Update User</button>
      </form>
    </div>
  )
}

export default UserUpdate