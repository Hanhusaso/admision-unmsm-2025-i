'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import playIcon from '@/public/icons/play-icon.svg'
import testimonio1 from '@/public/images/testimonio-1.png'
import testimonio2 from '@/public/images/testimonio-2.png'

import Modal from '../components/modal';
import YoutubeEmbed from '../components/youtube-embed';

const Egresados = () => {

	const [open, setOpen] = useState(false);
	const [activeVideoIframe, setActiveVideoIframe] = useState(null);

	return (
		<div className="pt-[33px] pb-5 md:pb-[51px] px-4">
			<div className="container mx-auto">
				<div className="flex flex-col items-center mb-[15px] md:mb-[26px]">
					<h2 className="text-center text-primary text-lg md:text-2xl font-black max-w-[224px] md:max-w-none font-greatScape">Escucha a nuestros egresados</h2>
				</div>
				<div className="flex flex-col md:flex-row justify-center gap-y-[20px] gap-x-[30px] items-center text-white font-openSans">
					<div className="w-full max-w-[323px] flex flex-row relative">
						<div className="absolute h-[208px] w-[122px] -left-[3px]">
							<Image
								src={testimonio1}
								alt="Testimonio 1"
								width={122}
								height={180}
								quality={100}
								className="absolute bottom-0 left-0"
							/>
						</div>
						<div className="basis-[15.79%] bg-secondary rounded-s-[20px] h-[109px]"></div>
						<div className="basis-[84.21%]">
							<div className="bg-secondary rounded-tr-[20px] h-[208px]">
								<div className="max-w-[171px] ml-auto mr-[29px] pt-[21px]">
									<h3 className="mb-[2px] font-extrabold">Valeria Aliaga</h3>
									<p className="mb-[7px] text-sm">Fac. Ciencias Físicas</p>
									<p className="leading-[19.6px] text-sm">&ldquo;Elegí a San Marcos por su prestigio académico y su sólida trayectoria en ciencias. Sabía que me brindaría oportunidades únicas&rdquo;</p>
								</div>
							</div>
							<div
								className="bg-primary rounded-b-[20px] h-[60px] flex gap-x-[10px] items-center justify-center cursor-pointer"
								onClick={() => {
									setActiveVideoIframe(<YoutubeEmbed codigo_embed="Z-UVLx3-7Ts" />)
									setOpen(true)
								}}
							>
								<Image
									src={playIcon}
									alt="Play icon"
									width={24}
									height={24}
								/>
								<span className="font-extrabold">Ver entrevista</span>
							</div>
						</div>
					</div>
					<div className="w-full max-w-[323px] flex flex-row relative">
						<div className="absolute h-[208px] w-[126px] right-0">
							<Image
								src={testimonio2}
								alt="Testimonio 2"
								width={126}
								height={189}
								quality={100}
								className="absolute bottom-0 right-0"
							/>
						</div>
						<div className="basis-[84.21%]">
							<div className="bg-secondary rounded-tl-[20px] h-[208px]">
								<div className="max-w-[171px] mr-auto ml-[29px] pt-[21px]">
									<h3 className="mb-[2px] font-extrabold">Oscar Machuca</h3>
									<p className="mb-[7px] text-sm">Fac. Ciencias Biológicas</p>
									<p className="leading-[19.6px] text-sm">&ldquo;Haber pasado por cada aula y haber conocido a cada profesor me ayudaron a inclinarme a la investigación científica&rdquo;</p>
								</div>
							</div>
							<div
								className="bg-primary rounded-b-[20px] h-[60px] flex gap-x-[10px] items-center justify-center cursor-pointer"
								onClick={() => {
									setActiveVideoIframe(<YoutubeEmbed codigo_embed="OEI-M1KbWTk" />)
									setOpen(true)
								}}
							>
								<Image
									src={playIcon}
									alt="Play icon"
									width={24}
									height={24}
								/>
								<span className="font-extrabold">Ver entrevista</span>
							</div>
						</div>
						<div className="basis-[15.79%] bg-secondary rounded-e-[20px] h-[109px]"></div>
					</div>
				</div>
			</div>
			<Modal open={open} setOpen={setOpen}>
				<div className="iframe-container">
					{activeVideoIframe}
				</div>
			</Modal>
		</div>
	)
}

export default Egresados