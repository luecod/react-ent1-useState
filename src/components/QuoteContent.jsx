import React from 'react'

const QuoteContent = ({ randomQuote }) => {
  return (
    <div className='card__content'>
      <div className='card__content__box'> 
        <i class="fa-solid fa-quote-left"></i>
        <p className='card__content__quote'>{randomQuote.quote}</p>
      </div>
      <h1 className='card__content__autor'>{randomQuote.author}</h1>
    </div>
  )
}

export default QuoteContent