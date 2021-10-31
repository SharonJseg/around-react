import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useEffect, useState } from 'react';
import api from '../utils/api';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (props) => {
    setSelectedCard(props);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className='page__container'>
      <Header />
      <CurrentUserContext.Provider value={currentUser}>
        <Main
          onEditAvatarClick={handleAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
      </CurrentUserContext.Provider>
      <Footer />

      <PopupWithForm
        name='delete-card'
        title='Are you sure?'
        titleModifier='form__heading_type_delete-card'
        submitModifier='form__submit-btn_type_delete-card'
      />

      <PopupWithForm
        name='edit-image'
        title='Change profile picture'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type='url'
          name='avatar'
          id='avatar'
          placeholder='Add image url'
          className='form__text-input form__text-input_type_avatar'
          required
        />
        <span className='form__validation-error form__validation-error_type_avatar'></span>
      </PopupWithForm>

      <PopupWithForm
        name='edit-profile'
        title='Edit Profile'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
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

      <PopupWithForm
        name='add-place'
        title='New Place'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Title'
          className='form__text-input form__text-input_type_title'
          minLength='1'
          maxLength='30'
          required
          pattern='.*\S.*'
        />
        <span className='form__validation-error form__validation-error_type_title'></span>
        <input
          type='url'
          name='url'
          id='url'
          placeholder='Image link'
          className='form__text-input form__text-input_type_url'
          required
        />
        <span className='form__validation-error form__validation-error_type_url'></span>
      </PopupWithForm>
      {selectedCard && (
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      )}
    </div>
  );
}

export default App;
