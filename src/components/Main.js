import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';
import addIcn from '../images/add.svg';
import imagePlaceHolder from '../images/profile_image.png';

const Main = (props) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className='profile'>
        <div className='profile__image-container'>
          <button
            onClick={props.onEditAvatarClick}
            type='button'
            aria-label='edit image button'
            className='profile__image-edit'
          />
          <img
            src={currentUser.avatar ? currentUser.avatar : imagePlaceHolder}
            alt='Jacques Cousteau '
            className='profile__image'
          />
        </div>
        <div className='profile__info'>
          <div className='profile__info-edit'>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <button
              onClick={props.onEditProfileClick}
              type='button'
              aria-label='edit profile button'
              className='profile__edit-btn'
            />
          </div>
          <p className='profile__job'>{currentUser.about}</p>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          className='profile__add-element-btn'
          type='button'
          aria-label='add picture button'
        >
          <img className='profile-icon' src={addIcn} alt='add element button' />
        </button>
      </section>

      <section className='cards'>
        <ul className='cards__container'>
          {props.cards.map((cardElement) => (
            <Card
              key={cardElement._id}
              card={cardElement}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
