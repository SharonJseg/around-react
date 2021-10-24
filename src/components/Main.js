import { useEffect, useState } from 'react';
import Card from './Card';
import api from '../utils/api';
import addIcn from '../images/add.svg';
import imagePlaceHolder from '../images/profile_image.png';

const Main = (props) => {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getAllInfo()
      .then(([cardArray, userInfo]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(cardArray);
      })
      .catch((err) => console.log(err));

    return () => {
      return;
    };
  }, [userName, userDescription, userAvatar, cards]);
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
            src={userAvatar ? userAvatar : imagePlaceHolder}
            alt='Jacques Cousteau '
            className='profile__image'
          />
        </div>
        <div className='profile__info'>
          <div className='profile__info-edit'>
            <h1 className='profile__name'>{userName}</h1>
            <button
              onClick={props.onEditProfileClick}
              type='button'
              aria-label='edit profile button'
              className='profile__edit-btn'
            />
          </div>
          <p className='profile__job'>{userDescription}</p>
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
          {cards.map((cardElement) => (
            <Card
              key={cardElement._id}
              card={cardElement}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
