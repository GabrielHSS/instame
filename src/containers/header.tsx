import { Layout } from 'antd'
import styled from 'styled-components'

const StyledHeader = styled(Layout.Header)`
  border-bottom: 1px solid #000;
  height: 8vh;
  display: flex;
  justify-content: space-between;
`

export function Header() {
  return <StyledHeader></StyledHeader>
}
