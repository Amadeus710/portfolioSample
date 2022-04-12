import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='colz'>
                <div className='colz-icon'>
                    <a href='#'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter'></i>
                    </a>
                </div>
            </div>

            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello, I'm <span className='highlighted-text'>（＾ω＾）</span>
                </span>
            </div>

            <div className='profile-detailsd-role'>
                <span className='primary-text'>
                    {" "}
                    <h1>
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Ethusiastic Dev",
                            1000,
                            "Full Stack Dev",
                            1000,
                            "MERN Stack Dev",
                            1000,
                            "Cross Platform v",
                            1000,
                            "React Dev",
                            1000,
                        ]}
                        />
                    </h1>
                </span>
                <span className='profile-role-tagline'>
                    Knack of building applications with front and back end operations.
                </span>
            </div>
            <div className='profile-options'>
                <button className='btn primary-btn'>
                    {" "}
                    I don't want to work!
                </button>
                <a href='ehizcv.pdf' download='redume.pdf'>
                    <button className='btn highlighted-btn'>Get Resume?</button>
                </a>
            </div>
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'></div>
        </div>
    </div>
  )
}
