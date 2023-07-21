import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        '{your service id}', //service ID
        '{your template id}', //template ID
        form.current,
        '{your public id}' //public key
      )
      .then(
        () => {
          // alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to sent the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            If you have any questions, don't hesitate to contact me using below
            form.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Snehashis Dasgupta, <br />
          India, <br />
          West Bengal, Kolkata <br />
          <br />
          <span>snehashisdasgupta4official@gmail.com</span>
        </div>
        <div className="map-wrap">
            <MapContainer center={[22.603107, 88.413417]} zoom={12}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                <Marker position={[22.603107, 88.413417]}>
                    <Popup>Snehashis lives here :)</Popup>
                </Marker>
            </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
