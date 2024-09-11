'use client';

import React, { useState } from 'react'
import Image from 'next/image';
import { Splide, SplideTrack, SplideSlide } from '@/app/libraries/splide';
import playIcon from '@/public/icons/play-icon.svg'

import ChevronRightIcon from '../components/icons/chevron-right-icon';
import Modal from '../components/modal';
import YoutubeEmbed from '../components/youtube-embed';

import videosFacultadesPorAreas from '../data/videos-facultades-por-areas';

const Facultades = () => {

	const [open, setOpen] = useState(false);
	const [activeVideoIframe, setActiveVideoIframe] = useState(null);

	const areas = Object.keys(videosFacultadesPorAreas);

	return (
		<div className="pt-5 md:pt-[51px] pb-10 px-4" id="facultades">
			<div className="container mx-auto">
				<div className="flex flex-col items-center mb-[25px] md:mb-[30px]">
					<h2 className="text-center text-primary text-lg md:text-2xl font-black max-w-[224px] md:max-w-none font-greatScape">Conoce nuestras facultades</h2>
				</div>
				{
					areas.map((area, index) => (
						<React.Fragment key={index}>
							<div className="flex flex-col items-center mb-[15px] md:mb-[26px]">
								<h3 className="text-center text-tertiary text-lg md:text-xl font-black max-w-[224px] font-greatScape">{area}</h3>
							</div>
							<div className="mx-auto max-w-[1029px]">
								<Splide
									options={{
										gap: '24px',
										autoWidth: true,
										focus: 0,
										omitEnd: true,
										pagination: false,
										breakpoints: {
											'768': {
												padding: 0,
												pagination: true,
											},
										},
									}}
									hasTrack={false}
									aria-label="videos facultades"
									className="splide-videos mb-14 md:mb-10"
								>
									<SplideTrack>
										{videosFacultadesPorAreas[area].map((video, index) => {
											const [imgYoutubeSrc, setImgYoutubeSrc] = useState(`https://i.ytimg.com/vi/${video.youtube_codigo_embed}/maxresdefault.jpg`);
											return (
												<SplideSlide key={index}>
													<figure
														className="w-[272px] md:w-[327px] cursor-pointer group"
														onClick={() => {
															setActiveVideoIframe(<YoutubeEmbed codigo_embed={video.youtube_codigo_embed} />)
															setOpen(true)
														}}
													>
														<div className="bg-secondary rounded-t-[20px] py-4 px-7 max-w-[259px] md:max-w-[300px]">
															<figcaption className="text-white text-base font-extrabold font-openSans">
																<h4>{video.facultad}</h4>
															</figcaption>
														</div>
														<div className="w-full relative">
															<Image
																src={imgYoutubeSrc}
																onError={() => setImgYoutubeSrc(`https://i.ytimg.com/vi/${video.youtube_codigo_embed}/hqdefault.jpg`)}
																width={327}
																height={183.94}
																alt={video.facultad}
																quality={100}
																className="w-full h-auto aspect-video"
															/>
															<div className="absolute bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[77px] h-[77px] rounded-[20px] transition-opacity opacity-70 group-hover:opacity-100 duration-300">
																<Image
																	src={playIcon}
																	width={30}
																	height={30}
																	alt="Play icon"
																	quality={100}
																	className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px]"
																/>
															</div>
														</div>

													</figure>
												</SplideSlide>
											)
										})}
									</SplideTrack>

									<div className="splide__arrows">
										<button className="splide__arrow splide__arrow--prev">
											<ChevronRightIcon className="-scale-x-100 !w-[31px] !h-[31px]" />
										</button>
										<button className="splide__arrow splide__arrow--next">
											<ChevronRightIcon className="!w-[31px] !h-[31px]" />
										</button>
									</div>
								</Splide>
							</div>
						</React.Fragment>
					))
				}

			</div>
			<Modal open={open} setOpen={setOpen}>
				<div className="iframe-container">
					{activeVideoIframe}
				</div>
			</Modal>
		</div>
	)
}

export default Facultades