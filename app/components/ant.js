'use client'

import { Button, DatePicker, Space } from 'antd'
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
      <DatePicker />

      <Space wrap>
        <Button type='primary'>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <Button type='text'>Text Button</Button>
        <Button type='link'>Link Button</Button>
      </Space>
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
