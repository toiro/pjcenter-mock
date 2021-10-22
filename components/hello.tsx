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
      <h1 css={hello}>Hello {name}!</h1>
    </div>
  )
}

export default Hello
