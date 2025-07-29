import React from 'react'

type ButtonProps = {
        cta: string
    }

export default function Button({cta} : ButtonProps) {

  return (
    <button type='button' className='btn'> {cta} </button>
  )
}
