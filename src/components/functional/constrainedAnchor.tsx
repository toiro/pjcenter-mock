import React, { PropsWithChildren, ReactElement } from 'react'

type Props<T extends string> = {
  id: T
  offset?: string | number
}

const constrainedAnchor = <T extends string>({
  id,
  offset,
}: PropsWithChildren<Props<T>>): ReactElement<any, any> | null => {
  const style = offset ? { top: offset } : {}
  return <a id={id} className="relative block invisible" style={style} />
}

export default constrainedAnchor
export type ConstrainedAnchorProps<T extends string> = Props<T>
