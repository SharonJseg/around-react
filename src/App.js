import logo from './images/logo.svg';
import addIcn from './images/add.svg';
import './index.css';

function App() {
  return (
    <div class='page__container'>
      <header class='header'>
        <img src={logo} alt='Around the U.S logo' class='logo' />
      </header>
      <main>
        <section class='profile'>
          <div class='profile__image-container'>
            <button
              type='button'
              aria-label='edit image button'
              class='profile__image-edit'
            ></button>
            <img
              src="<%=require('./images/profile_image.png')%>"
              alt='Jacques Cousteau '
              class='profile__image'
            />
          </div>
          <div class='profile__info'>
            <div class='profile__info-edit'>
              <h1 class='profile__name'></h1>
              <button
                type='button'
                aria-label='edit profile button'
                class='profile__edit-btn'
              ></button>
            </div>
            <p class='profile__job'></p>
          </div>
          <button
            class='profile__add-element-btn'
            type='button'
            aria-label='add picture button'
          >
            <img class='profile-icon' src={addIcn} alt='add element button' />
          </button>
        </section>

        <section class='cards'>
          <ul class='cards__container'></ul>
        </section>
      </main>
      <footer class='footer'>
        <p class='footer__copyright'>© 2021 Around The U.S.</p>
      </footer>

      <div class='modal modal_type_delete-card'>
        <div class='modal__container'>
          <form action='/' name='delete' method='get' class='form' novalidate>
            <div class='form__fieldset'>
              <button
                type='button'
                aria-label='Close button'
                class='modal__close-btn'
              ></button>
              <h2 class='form__heading form__heading_type_delete-card'>
                Are you sure?
              </h2>
              <button class='form__submit-btn form__submit-btn_type_delete-card'>
                Yes
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class='modal modal_type_edit-image'>
        <div class='modal__container'>
          <button
            type='button'
            aria-label='Close button'
            class='modal__close-btn'
          ></button>
          <form action='/' name='profile' method='get' class='form' novalidate>
            <fieldset class='form__fieldset'>
              <legend>
                <h2 class='form__heading'>Change profile picture</h2>
              </legend>
              <input
                type='url'
                name='avatar'
                id='avatar'
                placeholder='Add image url'
                class='form__text-input form__text-input_type_avatar'
                required
              />
              <span class='form__validation-error form__validation-error_type_avatar'></span>
              <button class='form__submit-btn'>Save</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div class='modal modal_type_edit-profile'>
        <div class='modal__container'>
          <button
            type='button'
            aria-label='Close button'
            class='modal__close-btn'
          ></button>
          <form action='/' name='profile' method='get' class='form' novalidate>
            <fieldset class='form__fieldset'>
              <legend>
                <h2 class='form__heading'>Edit Profile</h2>
              </legend>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                class='form__text-input form__text-input_type_name'
                minlength='2'
                maxlength='40'
                required
                pattern='.*\S.*'
              />
              <span class='form__validation-error form__validation-error_type_name'></span>
              <input
                type='text'
                name='job'
                id='job'
                placeholder='Job'
                class='form__text-input form__text-input_type_job'
                minlength='2'
                maxlength='200'
                required
                pattern='.*\S.*'
              />
              <span class='form__validation-error form__validation-error_type_job'></span>
              <button class='form__submit-btn'>Save</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div class='modal modal_type_add-element'>
        <div class='modal__container'>
          <button
            type='button'
            aria-label='Close button'
            class='modal__close-btn'
          ></button>
          <form
            action='/'
            name='add-card'
            class='form'
            id='image-form'
            novalidate
          >
            <fieldset class='form__fieldset'>
              <legend>
                <h2 class='form__heading'>New Place</h2>
              </legend>
              <input
                type='text'
                name='title'
                id='title'
                placeholder='Title'
                class='form__text-input form__text-input_type_title'
                minlength='1'
                maxlength='30'
                required
                pattern='.*\S.*'
              />
              <span class='form__validation-error form__validation-error_type_title'></span>
              <input
                type='url'
                name='url'
                id='url'
                placeholder='Image link'
                class='form__text-input form__text-input_type_url'
                required
              />
              <span class='form__validation-error form__validation-error_type_url'></span>
              <button class='form__submit-btn'>Save</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div class='modal modal_type_image'>
        <div class='modal__container modal__container_image'>
          <button
            type='button'
            aria-label='Close button'
            class='modal__close-btn'
          ></button>
          <img
            src="<%=require('./images/image_placeholder.jpg')%>"
            alt=''
            class='modal__image'
          />
          <h2 class='modal__title'></h2>
        </div>
      </div>
    </div>
  );
}

export default App;
