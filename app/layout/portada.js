import React from 'react'
import Link from 'next/link'

const H1 = ({ className }) => {
	return (
		<div className={className}>
			<h1 className="text-white max-md:text-center mb-3 leading-[1.2] font-greatScape">
				<span className="text-[26px] lg:text-[37px] xl:text-[42px] block">EXAMEN DE ADMISIÓN</span>{' '}
				<span className="text-[34px] lg:text-[55px] xl:text-[63px] block">UNMSM 2025-I</span>
			</h1>
		</div>
	)
}

const Fechas = ({ className }) => {
	return (
		<div className={className}>
			<div className="bg-secondary text-white font-greatScape text-[18px] md:text-[26px] inline-block rounded-r-[20px] pl-5 md:pl-[30px] py-3 md:py-[17px] pr-[25px] md:pr-[41px]">5, 6, 12 y 13 de octubre</div>
		</div>
	)
}

const CierreInscripciones = ({ className }) => {
	return (
		<div className={className}>
			<p className="text-white md:text-[20px] lg:text-[28px] xl:text-[30px] font-greatScape lg:text-nowrap lg:w-[440px] max-md:leading-[22.4px]">Cierre de inscripciones: 14 de setiembre</p>
		</div>
	)
}

const Inscribete = ({ className }) => {
	return (
		<div className={className}>
			<a
				href="#inscripcion"
				className="block bg-transparent font-greatScape text-white text-center text-lg font-black border-4 border-current rounded-[20px] p-[14px]"
			>
				<span>¡Inscríbete ahora!</span>
			</a>
		</div>
	)
}

const Portada = () => {
	return (
		<div className="bg-primary pt-[22px] pb-[40px] md:pb-[68px] px-4">
			<div className="container max-w-[1029px] mx-auto flex flex-col items-center">
				<H1 className="lg:hidden" />
				<div className="lg:flex lg:flex-row lg:gap-x-[33px] max-lg:mb-[35px]">
					<div className="max-lg:hidden lg:pt-[35px]">
						<H1 />
						<Fechas className="mb-[13px]" />
						<CierreInscripciones className="mb-[22px]" />
						<Inscribete className="w-[319px]" />
					</div>
					<div className="relative">
						<Fechas className="lg:hidden relative top-4 z-10" />
						<CierreInscripciones className="absolute lg:hidden bottom-0 w-[120px] md:w-[220px]" />
						<div className="hole max-md:max-w-[320px] md:w-[500px] xl:w-[557px]">
							<video className="aspect-video w-full h-full object-cover" autoPlay muted loop>
								<source src="https://d20cra10nhu74a.cloudfront.net/ciencias-biologicas/WEB_DOCTORADOS_SANMARCOS_CIENCIASBIO_h264.mp4" type="video/mp4" />
								Tu navegador no soporta la etiqueta video.
							</video>
						</div>
					</div>
				</div>
				<Inscribete className="lg:hidden max-lg:w-[262px]" />
			</div>
		</div>
	)
}

export default Portada