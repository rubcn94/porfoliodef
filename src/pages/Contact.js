import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [fromName, setFromName] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const form = useRef();

  useEffect(() => {
    emailjs.init("6-j1WFFMy2yBeutU1");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    const templateParams = {
      to_name: "Rubén", // Puedes cambiar esto o hacerlo dinámico si lo prefieres
      from_name: fromName,
      message: message,
      reply_to: replyTo
    };

    emailjs.send(
      'service_rcxo1af',
      'template_7pvy2ft',
      templateParams,
      '6-j1WFFMy2yBeutU1'
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      setStatus('Mensaje enviado con éxito');
      setFromName('');
      setReplyTo('');
      setMessage('');
    }, (error) => {
      console.error('FAILED...', error);
      setStatus(`Error al enviar el mensaje: ${error.text}`);
    });
  };

  return (
    <div className="contact">
      <h2>Contacto</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder="Tu nombre"
          required
          value={fromName}
          onChange={(e) => setFromName(e.target.value)}
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Tu email"
          required
          value={replyTo}
          onChange={(e) => setReplyTo(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
      {status && <p className={`status-message ${status.includes('éxito') ? 'success' : 'error'}`}>{status}</p>}
    </div>
  );
};

export default Contact;