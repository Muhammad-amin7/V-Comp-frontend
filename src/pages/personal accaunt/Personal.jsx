import { Container } from 'react-bootstrap'
import './Personal.scss'
import Menus from './additions/menus/menus'

export default function Personal() {
      return (
            <section className='personal'>
                  <Container>
                        <Menus />
                  </Container>
            </section>
      )
}
