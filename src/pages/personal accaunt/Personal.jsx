import { Container } from 'react-bootstrap'
import Menus from './additions/menus/menus'
import './Personal.scss'

export default function Personal() {
      return (
            <section className='personal'>
                  <Container>
                        <Menus />
                  </Container>
            </section>
      )
}
