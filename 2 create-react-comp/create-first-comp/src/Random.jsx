function Random() {
  let number = Math.random() * 100

  return <h2 style={{color: "green"}}>
    Random number: {Math.round(number)}
  </h2>
}

export default Random;