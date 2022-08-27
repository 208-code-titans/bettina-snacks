import {
	HomePage,
	AboutPage,
	ContactPage,
	DashboardPage,
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
	DASHBOARD,
} from './constants/routes'
import { AnimatePresence } from 'framer-motion'
import { Header, CartContainer } from './components/components'
import { useStateValue } from './context/StateProvider'
import { useEffect} from 'react'

function App() {
	const [{ cartShow }, dispatch] = useStateValue()
	
	useEffect(()=> {}, [cartShow])
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
				<Route path={DASHBOARD} element={<DashboardPage />} />
			</Routes>
			{
				// render cart if cart is true
				cartShow && (
					<CartContainer />
				)
			}
			
		</AnimatePresence>
	)
}

export default App
