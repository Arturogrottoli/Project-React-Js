import React from 'react'

const Contacto = () => {
  return (
    <>
    <h2 className='mt-4'>Estemos en Contacto</h2>
    <div className='container mt-5 mb-5 p-5 borde'>
    <div className='row'>
    <div className='col-6 negrita text-center mt-5' >
     <p> Ubicacion: Marcial Candioti 4075- Santa Fe Capital</p> <br/>
     <p> Telefono: 3425331601</p> <br />
     <p> Email: TiendaCell@gmail.com</p> <br />
    </div>
    <div className='col-6'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1166.8557999211334!2d-60.69487363340087!3d-31.63180518028943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9eb35ebc90b%3A0x367ec27222bb8ce8!2sMarcial%20Candioti%204075%2C%20S3002FSL%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1649077120862!5m2!1ses!2sar" width="500" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='tamanio_mapa'></iframe>
    </div>
    </div>
    </div>
    </>
  )
}

export default Contacto