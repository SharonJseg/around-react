const Card = (props) => {
  const handleClick = () => {
    props.onCardClick(props.card);
  };

  return (
    <li onClick={handleClick} className='card__container'>
      <article className='card'>
        <button
          className='card__delete-button'
          type='button'
          aria-label='delete image'
        />
        <img
          className='card__image'
          src={props.card.link}
          alt={props.card.name}
        />
        <div className='card__caption'>
          <h2 className='card__name'>{props.card.name}</h2>
          <div className='card__like-container'>
            <button
              className='card__like-button'
              type='button'
              aria-label='like button'
            />
            <p className='card__likes'>{props.card.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  );
};

export default Card;
