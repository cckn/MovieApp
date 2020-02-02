import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const Container = styled.View``

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <Container>
        <Text>Hello RN!</Text>
      </Container>
    </>
  )
}
export default App
