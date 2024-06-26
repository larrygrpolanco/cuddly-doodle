import Link from 'next/link'
import React, { useState } from 'react'
import * as Scroll from 'react-scroll'

const ScrollLink = Scroll.Link

const contacts = [
  {
    name: 'jordantwells@gmail.com',
    href: 'mailto:jordantwells@gmail.com'
  },
  {
    name: '281-608-1825',
    href: 'tel:+12816081825'
  }
]

export default function Footer () {
  let [toggle, setToggle] = useState(true)
  let [toggleStyle, setToggleStyle] = useState({
    marginy: 'mx-2',
    translatey: 'translate-y-0',
    translateyinv: 'translate-y-80',
    animate: ''
  })

  const changeToggle = e => {
    return
    setToggle(p => !p)
    if (!toggle) {
      setToggleStyle({
        marginy: 'mx-2',
        translatey: 'translate-y-0',
        translateyinv: 'translate-y-80',
        animate: ''
      })
    } else {
      setToggleStyle({
        marginy: '-mx-3',
        translatey: 'translate-y-80',
        translateyinv: 'translate-y-0',
        animate: ''
      })
    }
  }

  return (
    <div
      id='contact'
      className={
        toggleStyle.animate +
        ' overflow-hidden pb-5 flex flex-col items-center justify-center'
      }
    >
      <div
        onMouseEnter={changeToggle}
        className={
          toggleStyle.translateyinv +
          ' transition-transform ease-in-out duration-300 mt-10 flex flex-col justify-center items-center border-2 hover:cursor-pointer rounded-2xl bg-blue-400 w-14 h-14 z-50'
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-3/4 w-3/4 text-white text-center flex flex-row justify-center items-center'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      </div>
      <div
        onMouseLeave={changeToggle}
        className={
          toggleStyle.translatey +
          ' transition-transform ease-in-out duration-300 -mt-20 p-3 border-2 rounded-2xl bg-slate-800 flex flex-col items-center z-40'
        }
      >
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-white text-xl font-light'>Contact Me:</h2>
          <div className='flex flex-row justify-between'>
            {contacts.map(contact => {
              return (
                <Link key={contact.name} href={contact.href}>
                  <span>
                    <h3
                      className={
                        toggleStyle.marginy +
                        ' transition-spacing ease-in-out duration-500 text-center text-white text-lg hover:text-blue-300'
                      }
                    >
                      {contact.name}
                    </h3>
                  </span>
                </Link>
              )
            })}
          </div>
          <p className='text-white font-light text-base hover:cursor-pointer hover:text-blue-300 p-1'>
            <a  onClick={() => Scroll.animateScroll.scrollToTop()}>
              
              Back to Top
            </a>

          </p>
        

        </div>
      </div>
      <p className='text-white font-light italic text-base pt-3'>
            Built with Next.js, deployed with Vercel{' '}
          </p>
    </div>
  )
}
