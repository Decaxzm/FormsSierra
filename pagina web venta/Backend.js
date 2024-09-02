document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario para manejarlo con JS

  const formData = new FormData(this);

  fetch('https://formspree.io/f/xqazjapj', {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          alert('Correo enviado correctamente.');
          this.reset(); // Limpiar el formulario
      } else {
          alert('Hubo un error al enviar el correo.');
      }
  }).catch(error => {
      alert('Hubo un error al enviar el correo.');
  });
});
document.getElementById('formulario-link').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario para manejarlo con JS

  const formData = new FormData(this);

  fetch('https://formspree.io/f/[YOUR_FORM_ID]', {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          alert('Correo enviado correctamente.');
          this.reset(); // Limpiar el formulario
      } else {
          alert('Hubo un error al enviar el correo.');
      }
  }).catch(error => {
      alert('Hubo un error al enviar el correo.');
  });
});
