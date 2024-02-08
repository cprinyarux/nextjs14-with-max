import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
const Header = () => {
  return (
    <header className={classes.header}>
        <Link  className={classes.logo} href="/" > 
          <img src={logoImg.src} alt="A server surrounded by magic sparkles." />
          NextLevel Food
          </Link>

          <nav className={classes.nav}>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/meals">Meals</Link>
              </li>
              <li>
                <Link href="/community">Community</Link>
              </li>
            </ul>
          </nav>
    </header>
  )
}

export default Header