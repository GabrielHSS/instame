import styled from 'styled-components'
import { Header } from './header'
import { Footer } from './footer'
import { Content } from './content'

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: block;
`

interface IAppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: IAppLayoutProps) {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}
