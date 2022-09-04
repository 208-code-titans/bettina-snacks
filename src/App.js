import {
	HomePage,
	AboutPage,
	ContactPage,
	DashboardPage,
	MenuPage,
	SignInPage,
	SignUpPage,
	InvoicesPage,
} from './pages/pages'
import { Routes, Route, Navigate } from 'react-router-dom'
import {
	HOME,
	ABOUT,
	MENU,
	CONTACT,
	SIGN_UP,
	SIGN_IN,
	DASHBOARD,
	INVOICES,
} from './constants/routes'
import { AnimatePresence } from 'framer-motion'
import {
	Header,
	CartContainer,
	ProtectedAdmin,
	ProtectedRoute,
} from './components/components'
import { useStateValue } from './context/StateProvider'
import { useEffect } from 'react'

function App() {
	const [{ user, cartShow }, dispatch] = useStateValue()

	useEffect(() => {}, [cartShow])
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
				<Route
					path={DASHBOARD}
					element={
						<ProtectedAdmin user={user}>
							<DashboardPage />
						</ProtectedAdmin>
					}
				/>
				<Route
					path={INVOICES}
					element={
						<ProtectedRoute user={user}>
							<InvoicesPage />
						</ProtectedRoute>
					}
				/>
				<Route path="*" element={<Navigate to={HOME} />} />
			</Routes>
			{
				// render cart if cart is true
				cartShow && <CartContainer />
			}
		</AnimatePresence>
	)
}

export default App
