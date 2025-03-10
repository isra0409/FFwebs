import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";


const LandingPage = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Enviar email con EmailJS
    emailjs.send(
      "service_f1306kz",  // Reemplaza con tu Service ID
      "template_a2zc7h8", // Reemplaza con tu Template ID
      { user_email: email }, // Datos a enviar
      "GvN6IDzFIT-CnOXLY"   // Reemplaza con tu Public Key
    )
    .then(() => {
      alert(`¡Gracias por suscribirte con: ${email}!`);
      setEmail(""); // Limpiar input después de enviar
    })
    .catch((error) => {
      console.error("Error al suscribirse:", error);
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-center text-white bg-dark py-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhwfGVufDB8fDB8fHww")', // Cambia la ruta de la imagen por la correcta
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Asegura que ocupe toda la altura de la pantalla
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', // Centra el contenido verticalmente
          position: 'relative',
        }}
      >
        {/* Difuminado */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8))', // Efecto de difuminado
          }}
        ></div>

        <div className="container position-relative">
          <h1 className="fw-bold">
            ¿Cuántas veces escuchaste que la primera impresión es la más importante?
          </h1>
          <p className="lead">
            Bueno… en la era digital, esa primera impresión es TU PRESENTACIÓN WEB.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <a href="https://wa.me/543513456407" className="btn btn-primary btn-lg">Contáctanos</a>
            <a href="https://wa.me/543513456407" className="btn btn-outline-light btn-lg">Más Info</a>
          </div>
        </div>
      </section>

      {/* Problema & Solución */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold">🚀 LinkedIn es aburrido. Un PDF es anticuado.</h2>
          <p className="lead">Una presentación web es el futuro.</p>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="p-3 border rounded shadow-sm">
                <h5 className="fw-bold">🔴 El Problema</h5>
                <p>Nadie lee currículums largos. Es difícil destacarse en un mundo saturado.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded shadow-sm">
                <h5 className="fw-bold">✅ La Solución</h5>
                <p>Tu presentación web en segundos, sin código y con diseño profesional.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded shadow-sm">
                <h5 className="fw-bold">📌 Linkeable y Compartible</h5>
                <p>Usala en entrevistas, redes sociales o donde quieras.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold">🛠️ Cómo Funciona</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="p-3">
                <h5 className="fw-bold">1️⃣ Nos contactas</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3">
                <h5 className="fw-bold">2️⃣ Creamos tu sitio web</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3">
                <h5 className="fw-bold">3️⃣ Compartis tu web y creces digitalmente!</h5>
              </div>
            </div>
          </div>
          <a href="https://wa.me/543513456407" className="btn btn-primary btn-lg mt-4">Quiero mi web</a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-container py-5 text-center">
        <div className="container">
          <h2 className="mb-3">📩 Queres asesoría personalizada?</h2>
          <p className="text-muted">Dejanos tu email y nuestro equipo se pondra en contacto con vos</p>
          <form className="d-flex justify-content-center mt-3" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="form-control me-2"
              style={{ maxWidth: "350px" }}
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Quiero asesoría</button>
          </form>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold">🔥 ¿Qué dicen nuestros usuarios?</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="p-3 border rounded shadow-sm">
                <p>🙋‍♂️ "Me cerraron más clientes desde que uso mi presentación web."</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded shadow-sm">
                <p>👩‍💻 "La uso en entrevistas de trabajo y siempre llama la atención."</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded shadow-sm">
                <p>🎤 "Incluso la puse en mi bio de Instagram y funciona genial."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center text-white bg-dark py-5">
        <div className="container">
          <h2 className="fw-bold">📢 No te quedes atrás.</h2>
          <p className="lead">Generá tu presentación en segundos y hacé que te recuerden.</p>
          <a href="https://wa.me/543513456407" className="btn btn-primary btn-lg">Contáctanos</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-1">© 2025 FastFront webs. Todos los derechos reservados.</p>
          <div className="d-flex justify-content-center gap-3">
            {/* <a href="https://wa.me/543513456407" className="text-white"><FaFacebook size={24} /></a> */}
            <a href="https://www.instagram.com/fastfrontwebs" className="text-white"><FaInstagram size={24} /></a>
            {/* <a href="https://wa.me/543513456407" className="text-white"><FaTwitter size={24} /></a> */}
            <a href="https://wa.me/543513456407" className="text-white"><FaWhatsapp size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
