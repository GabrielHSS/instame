import styled from "styled-components";
import { Layout } from 'antd'

const StyledFooter = styled(Layout.Footer)`
  border-top: 1px solid #000;
  height: 8vh;
`

export function Footer () {
  return <StyledFooter />
}