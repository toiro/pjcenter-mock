import React from 'react'
import { css } from '@emotion/react'

const hello = css`
  color: red;
`

type Props = {
  name: string
}

const Hello: React.FC<Props> = (props) => {
  const { name } = props
  return (
    <div>
      <h1 className="text-blue-600">Hello {name}!</h1>
    </div>
  )
}

export default Hello
