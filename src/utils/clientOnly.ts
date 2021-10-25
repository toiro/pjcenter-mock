const clientOnly = (func: () => void) => {
  if (typeof window !== 'undefined') {
    func()
  }
}

export default clientOnly
