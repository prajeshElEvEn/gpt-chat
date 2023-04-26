import React from 'react'
import RightArrow from '../assets/svgs/right-arrow.svg'
import Github from '../assets/svgs/github.svg'
const Navbar = () => {
    return (
        <div className='nav'>
            <div className='left'>
                <div className='logo'>
                    chatGPT
                </div>
            </div>
            <div className='right'>
                <a href='https://openai.com/' target='_blank' rel='noreferrer'>
                    <span>
                        OpenAI
                    </span>
                    <img src={RightArrow} alt='right-arrow' />
                </a>
                <a href='https://github.com/prajeshElEvEn/gpt-chat' target='_blank' rel='noreferrer'>
                    <img src={Github} alt='github' />
                    <span>
                        Github
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Navbar
