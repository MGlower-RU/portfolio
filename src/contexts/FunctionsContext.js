import React, { createContext, useState } from 'react';

export const FunctionsContext = createContext();

export default function FunctionsContextFunction(props) {
  const [isCopied, setIsCopied] = useState(false)

  function copyToClipboard(e) {
    e.preventDefault()

    if (navigator.clipboard) {
      navigator.clipboard.writeText(e.target.textContent)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 3000)
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <FunctionsContext.Provider value={{copyToClipboard, isCopied, setIsCopied}}>
      {props.children}
    </FunctionsContext.Provider>
  )
}