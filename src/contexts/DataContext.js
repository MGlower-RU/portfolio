import React, { createContext } from 'react';

import { data } from '../components/Data';

export const DataContext = createContext();

export default function DataContextFunction(props) {
  return (
    <DataContext.Provider value={data}>
      {props.children}
    </DataContext.Provider>
  )
}