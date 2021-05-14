import React from 'react'
import Christian from '../../../Assets/Images/christian.jpeg'
import Jonas from '../../../Assets/Images/jonas.jpeg'
import Sonas from '../../../Assets/Images/soren.jpeg'
import './styles.scss'

const Get = () => {
    return (
        <>
            <main>
                <div className='color'></div>
                <div>
                    <h1 className='h1'>Get in touch with our experts!</h1>
                <div className='container'>
                    <div className='bg-container'>
                        <div>
                            <img src={Christian} alt=''/>
                        </div>
                        <div>
                            <h1>Christian Hille</h1>
                            <p>Managing Director</p>
                            <p>Europe</p>
                            <p>Phone - <span className='phone'>+49 151 27654612</span></p>
                            <p>Mail - <span className='phone'>Christian.Hille@umlaut.com</span></p>
                        </div>
                    </div>
                    <div className='bg-container'>
                        <div>
                            <img src={Jonas} alt=''/>
                        </div>
                        <div>
                            <h1>Jonas Kampik</h1>
                            <p>Managing Director</p>
                            <p>Europe</p>
                            <p >Phone - <span className='phone'>+49 151 57133529</span></p>
                            <p>Mail - <span className='phone'>Jonas.Kampik@umlaut.com</span></p>
                        </div>
                    </div>
                    <div className='margin'>
                        <div>
                            <img src={Sonas} alt=''/>
                        </div>
                        <div className='card'>
                            <h1>Sören Schrader</h1>
                            <p>Lead Partner Energy & Utilities</p>
                            <p>Americas</p>
                            <p>Phone - <span className='phone'>+1 248 4508678</span></p>
                            <p>Mail - <span className='phone'>Soeren.Schrader@umlaut.com</span></p>
                        </div>
                    </div>
                </div>
                </div>
            </main>
        </>
    )
}

export default Get