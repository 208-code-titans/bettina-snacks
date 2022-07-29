import {
	HomePage,
	AboutPage,
	ContactPage,
	// DashboardPage,
	MenuPage,
	SignInPage,
	SignUpPage,
} from './pages/pages'
import { Routes, Route } from 'react-router-dom'
import {
	HOME,
	ABOUT,
	MENU,
	CONTACT,
	SIGN_UP,
	SIGN_IN,
} from './constants/routes'
import { AnimatePresence } from 'framer-motion'
import {Header} from './components/components'

function App() {
	return (
    <AnimatePresence exitBeforeEnter>
      <Header />
      
			<Routes>
				<Route path={HOME} element={<HomePage />} />
				<Route path={ABOUT} element={<AboutPage />} />
				<Route path={MENU} element={<MenuPage />} />
				<Route path={CONTACT} element={<ContactPage />} />
				<Route path={SIGN_IN} element={<SignInPage />} />
				<Route path={SIGN_UP} element={<SignUpPage />} />
			</Routes>
		</AnimatePresence>
	)
}

export default App
