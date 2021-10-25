import React, { cloneElement, ReactNode } from 'react'
import ctl from '@netlify/classnames-template-literals'

export const appendClassName = (elements: ReactNode, className: string) =>
  React.Children.map(elements, (element) => {
    if (React.isValidElement(element)) {
      const newClassName = ctl(`
        ${element.props.className}
        ${className}
        `)
      return cloneElement(element, {
        className: newClassName,
      })
    }
  })
