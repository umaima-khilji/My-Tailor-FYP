import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
        let tx = 0;

    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    const slideBackword = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }



  return (
    <div className='testimonials'>
    <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
    <img src={back_icon} alt="" className='back-btn' onClick={slideBackword}  />
    
    <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jacson</h3>
                            <span>customer, Karachi</span>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Beatae vel qui ipsam doloremque quibusdam libero accusamus
                          odio maiores tenetur reprehenderit consectetur excepturi
                         inventore nemo deleniti suscipit sint maxime, in minus?</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jacson</h3>
                            <span>customer, Karachi</span>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Beatae vel qui ipsam doloremque quibusdam libero accusamus
                          odio maiores tenetur reprehenderit consectetur excepturi
                         inventore nemo deleniti suscipit sint maxime, in minus?</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt="" />
                        <div>
                            <h3>William Jacson</h3>
                            <span>customer, Karachi</span>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Beatae vel qui ipsam doloremque quibusdam libero accusamus
                          odio maiores tenetur reprehenderit consectetur excepturi
                         inventore nemo deleniti suscipit sint maxime, in minus?</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4} alt="" />
                        <div>
                            <h3>William Jacson</h3>
                            <span>customer, Karachi</span>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Beatae vel qui ipsam doloremque quibusdam libero accusamus
                          odio maiores tenetur reprehenderit consectetur excepturi
                         inventore nemo deleniti suscipit sint maxime, in minus?</p>
                </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Testimonials
