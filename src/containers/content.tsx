import styled from "styled-components";
import { Layout } from 'antd'

const StyledContent = styled(Layout.Content)`
margin: auto 0;
height: 84vh;
`

interface IContentProps {
  children: React.ReactNode
}

export function Content ({children}: IContentProps) {
  return <StyledContent>{children}</StyledContent>
}