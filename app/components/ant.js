'use client'

import styled from 'styled-components'

const Ant = () => {
  return (
    <Wrapper>
      <h1>how is going</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        consectetur.
      </p>
      <button>Hello</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: blue;
  button {
    background-color: transparent;
    border: transparent;
  }
`
export default Ant
