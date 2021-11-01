import PopupWithForm from './PopupWithForm';
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const EditProfilePopup = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const [description, setDescription] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    setName(currentUser && currentUser.name);
    setDescription(currentUser && currentUser.about);
  }, [currentUser]);

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name='edit-profile'
      title='Edit Profile'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleNameChange}
        type='text'
        name='name'
        id='name'
        placeholder='Name'
        className='form__text-input form__text-input_type_name'
        minLength='2'
        maxLength='40'
        required
        pattern='.*\S.*'
      />
      <span className='form__validation-error form__validation-error_type_name'></span>
      <input
        onChange={handleDescriptionChange}
        type='text'
        name='job'
        id='job'
        placeholder='Job'
        className='form__text-input form__text-input_type_job'
        minLength='2'
        maxLength='200'
        required
        pattern='.*\S.*'
      />
      <span className='form__validation-error form__validation-error_type_job'></span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
