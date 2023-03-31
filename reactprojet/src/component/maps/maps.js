import React from 'react';
import './maps.css';

function Maps() {
    return (
      <div className='maps'>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1593.0024164856302!2d3.1485341583166253!3d50.73606349243264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32edc87b2b5ad%3A0xa2d9eec091e57342!2sLa%20table%20de%20Chantal!5e1!3m2!1sfr!2sfr!4v1680266210950!5m2!1sfr!2sfr"
              width="100%" height="500" allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    );
  }

  export default Maps;
