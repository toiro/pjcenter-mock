import React from 'react'
import { appendClassName } from '~/utils/components'

type Prop = {
  className: string
}

const classNameInjector: React.FC<Prop> = ({ children, className }) => {
  const modified = appendClassName(children, className)
  return <>{modified}</>
}

export default classNameInjector
