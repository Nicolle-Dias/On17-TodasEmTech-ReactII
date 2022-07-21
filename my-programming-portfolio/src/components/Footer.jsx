import Social from './Social'
import github from '../img/github.png'
import twitter from '../img/twitter.png'

let Footer = () => {
    return (
        <footer>
          <Social src={github} href="https://github.com/Nicolle-Dias"/>
          <Social src={twitter} href="https://twitter.com/nicolledias1992"/>
        </footer>
    )
}

export default Footer