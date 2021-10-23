const PopupWithForm = (props) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit clicked');
  };

  return (
    <div
      className={`modal modal_type_${props.name} ${
        props.isOpen ? 'modal_opened' : ''
      }`}
    >
      <div className='modal__container'>
        <button
          onClick={props.onClose}
          type='button'
          aria-label='Close button'
          className='modal__close-btn'
        />
        <form
          onSubmit={handleSubmit}
          action='/'
          name={props.name}
          method='get'
          className='form'
          noValidate
        >
          <fieldset className='form__fieldset'>
            <legend>
              {props.titleModifier ? (
                <h2 className={`form__heading ${props.titleModifier}`}>
                  {props.title}
                </h2>
              ) : (
                <h2 className='form__heading'>{props.title}</h2>
              )}
            </legend>
            {props.children}
            {props.submitModifier ? (
              <button className={`form__submit-btn ${props.submitModifier}`}>
                Yes
              </button>
            ) : (
              <button className='form__submit-btn'>Save</button>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
