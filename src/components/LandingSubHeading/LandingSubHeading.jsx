import React from 'react'

// Component to dynamically render landing section information

const LandingSubHeading = ({ title, span, subtitle }) => {
	return (
		<div className='flex flex-col gap-8 items-center'>
			<h1 className='text-7xl'>
                {title}
                {' '}
				<span className='text-red-600'>{span}</span>
			</h1>

			<p className='text-gray-500'>{subtitle}</p>
		</div>
	)
}

export default LandingSubHeading
