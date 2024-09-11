import React from 'react'

const Inscripcion = () => {
	return (
		<div className="bg-primary text-white pt-9 pb-[49px] px-4">
			<div className="container max-w-[703px] mx-auto">
				<div className="flex flex-col items-center mb-5 md:mb-[47px]">
					<h2 className="text-center text-lg font-black max-w-[224px] font-greatScape">Proceso de inscripción</h2>
				</div>
				<div className="font-openSans text-sm">
					<ol className="space-y-5 mb-[22px] md:mb-[26px]">
						<li className="flex items-baseline">
							<span className="font-black text-xl mr-3">1</span>
							<div>
								<h3 className="font-extrabold mb-4">Adquiere el reglamento</h3>
								<p className="mb-2">Realiza el pago de S/ 70.00 de manera:</p>
								<ul className="list-disc list-inside ml-1 mb-2">
									<li>Presencial: en el Banco de la Nación (BN)</li>
									<li>Virtual: en la plataforma <a href="https://www.pagalo.pe/" rel="noopener noreferrer" target="_blank" className="font-bold underline decoration-1">Págalo.pe</a></li>
								</ul>
								<p>El código de pago es 9516</p>
							</div>
						</li>
						<li className="flex items-baseline">
							<span className="font-black text-xl mr-3">2</span>
							<div>
								<h3 className="font-extrabold mb-4">Registra el pago y tus datos</h3>
								<p className="mb-2">Hazlo en la página web <a href="https://admision.unmsm.edu.pe/" rel="noopener noreferrer" target="_blank" className="font-bold underline decoration-1">admision.unmsm.edu.pe</a></p>
								<p>El sistema enviará un enlace de descarga del reglamento al correo registrado</p>
							</div>
						</li>
						<li className="flex items-baseline">
							<span className="font-black text-xl mr-3">3</span>
							<div>
								<h3 className="font-extrabold mb-4">Realiza el pago de inscripción</h3>
								<p className="mb-2">Realiza el pago de manera:</p>
								<ul className="list-disc list-inside ml-1 mb-2">
									<li>Presencial: en el Banco de la Nación (BN)</li>
									<li>Virtual: en la plataforma <a href="https://www.pagalo.pe/" rel="noopener noreferrer" target="_blank" className="font-bold underline decoration-1">Págalo.pe</a></li>
								</ul>
								<p className="mb-2">Montos y códigos de pago:</p>
								<ul className="list-disc list-inside ml-1">
									<li>Institución educativa pública: S/ 450.00, código de pago: 9507</li>
									<li>Institución educativa privada: S/ 850.00, código de pago: 9508</li>
								</ul>
							</div>
						</li>
						<li className="flex items-baseline">
							<span className="font-black text-xl mr-3">4</span>
							<div>
								<h3 className="font-extrabold mb-4">Ingresa los datos del pago realizado</h3>
								<p>Ingresa la información de los recibos y tus datos personales en la página web <a href="https://admision.unmsm.edu.pe/" rel="noopener noreferrer" target="_blank" className="font-bold underline decoration-1">admision.unmsm.edu.pe</a></p>
							</div>
						</li>
					</ol>
					<p className="font-bold mb-[11px] md:mb-[26px]">Al final del registro el sistema te mostrará el código de postulante de seis dígitos.</p>
					<div className="bg-black/50 px-4 py-[18px] rounded-lg">
						<h3 className="font-extrabold mb-2">Importante:</h3>
						<p>Tras cada pago se debe esperar seis horas para efectuar el siguiente paso.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Inscripcion