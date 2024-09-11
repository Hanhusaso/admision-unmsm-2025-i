'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import MenuIcon from '@/app/components/icons/menu-icon';
import CloseIcon from '@/app/components/icons/close-icon';
import logo from '@/public/icons/logo-UNMSM.svg';

import { motion } from 'framer-motion';
import { entradaMenu } from '@/app/libraries/framer-motion/animations';

const Header = () => {
	const [isOpen, setOpen] = useState(false);

	const showMenu = () => {
		setOpen(true);
	};

	const hiddenMenu = () => {
		setOpen(false);
	};

	return (
		<header className="bg-primary text-white">
			<div>
				<div className="mx-auto max-w-[1029px] px-5 md:px-8 py-6 flex flex-row justify-between items-center">
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.1 }}
						variants={entradaMenu}
						className="flex items-center"
					>
						<div>
							<Image
								src={logo}
								alt="Logo UNMSM"
								width={200}
								height={66}
								quality={100}
								className="w-[180px] md:w-[220px]"
							/>
						</div>
					</motion.div>

					<div
						className={`transition relative max-lg:fixed max-lg:inset-0 max-lg:z-20 max-lg:w-full max-lg:h-screen max-lg:bg-primary max-lg:px-9 max-lg:pt-[70px] ${isOpen
							? 'max-lg:translate-x-0'
							: 'max-lg:translate-x-full'
							}`}
					>
						<button
							className="lg:hidden absolute top-6 right-3 p-2"
							onClick={hiddenMenu}
						>
							<CloseIcon />
						</button>
						<motion.nav
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.1 }}
							variants={entradaMenu}
							className="flex flex-col lg:flex-row font-semibold font-montserrat gap-x-4 xl:gap-x-10 text-[15px] xl:text-base"
						>
							<a
								onClick={hiddenMenu}
								className="p-2 max-lg:mb-[34px]"
								href="#facultades"
							>
								Facultades
							</a>
							<a
								onClick={hiddenMenu}
								className="p-2 max-lg:mb-[34px]"
								href="#inscripcion"
							>
								Proceso de inscripción
							</a>
						</motion.nav>
					</div>
					<button className="lg:hidden p-2" onClick={showMenu}>
						<MenuIcon />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
