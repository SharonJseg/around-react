import addIcn from '../images/add.svg';

const Main = () => {
  return (
    <main>
      <section className='profile'>
        <div className='profile__image-container'>
          <button
            type='button'
            aria-label='edit image button'
            className='profile__image-edit'
          ></button>
          <img
            src='./images/profile_image.png'
            alt='Jacques Cousteau '
            className='profile__image'
          />
        </div>
        <div className='profile__info'>
          <div className='profile__info-edit'>
            <h1 className='profile__name'></h1>
            <button
              type='button'
              aria-label='edit profile button'
              className='profile__edit-btn'
            ></button>
          </div>
          <p className='profile__job'></p>
        </div>
        <button
          className='profile__add-element-btn'
          type='button'
          aria-label='add picture button'
        >
          <img className='profile-icon' src={addIcn} alt='add element button' />
        </button>
      </section>

      <section className='cards'>
        <ul className='cards__container'></ul>
      </section>
    </main>
  );
};

export default Main;
