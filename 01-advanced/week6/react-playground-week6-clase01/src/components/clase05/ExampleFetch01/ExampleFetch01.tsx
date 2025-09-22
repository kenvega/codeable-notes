import React, { useState } from "react";
import "./ExampleFetch01.module.css";

const ENDPOINT = "https://test-api-codeable.up.railway.app/api/data?simulatedError=true";

// podria llamarse StatusType
type PossibleStatus = 'loading' | 'error' | 'success' | 'idle'

function ExampleFetch01() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  // se crean estados para mostrar al usuario
  const [status, setStatus] = useState<PossibleStatus>('idle');

  const id = React.useId();
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // se detiene el behavior del form por defecto
    event.preventDefault()

    // cambias el estado a loading antes de empezar a cargar la data

    setStatus('loading')
    // en windows con ctrl + . se pueden ver
    // con control + espacio se pueden ver las opciones
    // se llama: "trigger suggest"
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, message })
      })

      // como typescript no puede saber que tipo de dato
      // es lo que traera el request
      // le asigna el tipo de respuesta any
      const data = await response.json();

      if (data.ok) {
        setStatus('success')
        console.log(data)
      } else {
        throw Error(`La respuesta del servidor no fue exitosa: ${JSON.stringify(data)}`)
      }
    } catch (error) {
      console.log('Hubo un error en la solicitud', error)
      setStatus('error')
    }
  }

  const isLoading = status === 'loading'

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="field-group">
        <label htmlFor={messageId} className="label">
          Email:
        </label>
        <input
          id={emailId}
          type="email"
          name="email"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
          className="field"
          required
        />
      </div>
      <div className="field-group">
        <label htmlFor={messageId} className="label">
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          value={message}
          disabled={isLoading}
          onChange={(e) => setMessage(e.target.value)}
          className="field"
          required
        />
      </div>
      <button type="submit" className="button" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Send'}
      </button>
      {status === 'success' && <p>Message sent!</p>}
      {status === 'error' && <p>Something went wrong!</p>}
    </form>
  );
}

export default ExampleFetch01;