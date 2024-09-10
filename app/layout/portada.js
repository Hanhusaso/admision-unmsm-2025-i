import React from 'react'
import Link from 'next/link'

const Portada = () => {
	return (
		<div className="bg-primary py-10 px-5">
			<div className="container mx-auto flex flex-col items-center">
				<h1 className="text-white text-center mb-3 leading-[1.2]">
					<span className="text-[26px] block">EXAMEN DE ADMISIÓN</span>{' '}
					<span className="text-[34px] block">UNMSM 2025-I</span>
				</h1>
				<Link
					href="/inscripcion"
					className="block bg-transparent text-white text-center text-lg font-black border-4 border-current rounded-[20px] max-w-[262px] w-full p-[14px]"
				>
					<span>¡Inscríbete ahora!</span>
				</Link>
			</div>
		</div>
	)
}

export default Portada