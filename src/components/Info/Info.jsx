import './Info.scss';

function Info({title, location}) {
  return (
    <section className='info-container'>
      <h2 className='info__title'>{title}</h2>
      <p className='info__location'>{location}</p>
    </section>
  );
}

export default Info;