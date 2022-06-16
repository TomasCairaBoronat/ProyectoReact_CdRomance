
import { sendForm,init } from '@emailjs/browser';
import React from 'react'
import Swal from 'sweetalert2';
import '../styles/contact.css'
const Contact = () => {
    (function () {
        init('taN9cOyfefYfoC2Xw');
      })();
      window.onload = function () {
        document.getElementById('contact-form').addEventListener('submit', function (event) {
          event.preventDefault();
          this.contact_number.value = Math.random() * 100000 | 0;
         sendForm('service_Tony', 'contact_form', this)
            .then(() => {
              Swal.fire({
                icon: 'success',
                title: 'Formulario enviado correctamente!',
                confirmButtonColor: "#808080",
              })
            }).catch(() => {
              Swal.fire({
                icon: 'error',
                title: 'Hubo un error con el servidor, intenta nuevamente mas tarde',
                confirmButtonColor: "#808080",
              })
            }
            );
        });
      }
  return (
    <div>
    <section className="container-fluid row " id="contact">
        <div className='col-md-7 col-lg-7 col-xl-9'>
            <h2 className='mt-2 mb-3'> Contact:</h2>
            <ul className="contactoUl">
                <li className='mb-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="auto" fill="black" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                </svg><a href="tel:+34 605155398" className="text">  +34 605-155-398</a>
                </li>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="auto" fill="black" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                </svg> <a href="mailto:cdromance@gmail.com" className="text">  cdromance@gmail.com</a>
                </li>
            </ul>
        </div>
        <div className="col-md-5 col-lg-5 col-xl-3">
            <h4>Formulario:</h4>
            <form id="contact-form" className="form border rounded border-dark row">
              <input type="hidden" name="contact_number"/>
              <label><strong>Nombre:</strong></label>
              <input type="text" name="user_name" required="" minlength="3"/>
              <label><strong>Email:</strong></label>
              <input type="email" name="user_email" required="" minlength="5"/>
              <label><strong>Mensaje:</strong></label>
              <textarea name="message"></textarea>
              <input type="submit" className="my-2" value="Enviar" id="botonFormulario" required="" minlength="3"/>
          </form>
          </div>
    </section>
    </div>
  )
}

export default Contact