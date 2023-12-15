function Hello() {
  // let myName = 'Raviraj';
  let fullName = () => {
    return 'Raviraj Ghodake'
  }

  return <h3>
    {/* Kya bolti public. Apun hai {myName}. */}
    Kya bolti public. Apun hai {fullName()}.
  </h3>
}

export default Hello;