import React, { createContext } from 'react';

export const FunctionsContext = createContext();

function copyToClipboard(e) {
  e.preventDefault()
  if (navigator.clipboard) {
    navigator.clipboard.writeText(e.target.textContent)
    .then(() => {
      alert('The text was copied to clipboard')
    })
    .catch(err => console.log(err))
  }
}

export default function FunctionsContextFunction(props) {
  return (
    <FunctionsContext.Provider value={{copyToClipboard}}>
      {props.children}
    </FunctionsContext.Provider>
  )
}