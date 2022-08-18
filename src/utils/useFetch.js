import { useEffect, useState } from 'react'

// Hook to fetch product data with axios
const useFetch = (url) => {
	const [productData, setProductData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	// When url changes, execute this function
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)

			try {
                const response = await axios.get(url)
                setProductData(response.data)
			} catch (err) {
				setError(err)
            }
            
            setLoading(false)
        }
        fetchData()
    }, [url])
    
    const reFetch = async () => {
        setLoading(true)
    
        try {
            const response = await axios.get(url)
            setProductData(response.data)
        } catch (err) {
            setError(err)
        }
        
        setLoading(false)
    }

    return { data, loading, error, reFetch}
}


export default useFetch

