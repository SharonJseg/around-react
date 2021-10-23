const ImagePopup = (props) => {
  return (
    <div className='modal modal_type_image'>
      <div className='modal__container modal__container_image'>
        <button
          type='button'
          aria-label='Close button'
          className='modal__close-btn'
        ></button>
        <img src='' alt='' className='modal__image' />
        <h2 className='modal__title'>test</h2>
      </div>
    </div>
  );
};

export default ImagePopup;
