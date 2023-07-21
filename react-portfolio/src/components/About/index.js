import { useEffect, useState } from 'react'
import {faCss3, faGitAlt, faHtml5, faJsSquare, faJava, faPython
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}  idx={15}
                    />
                </h1>
                <p>
                    Highly motivated and dedicated undergraduate student pursuing a degree in computer science with a strong passion for software development. Seeking opportunities to apply my technical skills and knowledge in a dynamic and challenging environment as a Software Development Engineer (SDE).
                </p>
                <p>
                    Currently pursuing a Bachelor's degree in Computer Science (expected graduation date: July, 2024) from JIS University.
                </p>
                <p>
                    Enthusiastic undergraduate with a love for sports, particularly football and cricket.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faJava} color='#ED8B00'></FontAwesomeIcon>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'></FontAwesomeIcon>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faPython} color='#FFD43B'></FontAwesomeIcon>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'></FontAwesomeIcon>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'></FontAwesomeIcon>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About