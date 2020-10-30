import {Box, Link} from 'rebass'

const Component = ({children}) => (
  <div>
  Hello world
  {children}
  </div>
)

export default () =>
<Component>
  <div>
  Welcome to next.js!
  </div>
  <Box
    p={5}
    fontSize={4}
    width={[ 1, 1, 1/2 ]}
    color='black'
    bg='red'>
    <Link href='http://crashsafari.com/'>Windows: System32 Is Not Defined</Link>
</Box>
</Component>
