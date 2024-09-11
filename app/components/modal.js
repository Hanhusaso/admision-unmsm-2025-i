import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CloseRedIcon from './icons/close-red-icon';

export default function Modal({ open, setOpen, children, title }) {
	const cancelButtonRef = useRef(null);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10"
				initialFocus={cancelButtonRef}
				onClose={setOpen}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex flex-col w-full min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 bg-gray-dark/40">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[98%] sm:max-w-6xl">
								<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
									<div className="mt-3 sm:mt-0 text-left relative">
										<button
											type="button"
											className={`max-md:p-2` + (title ? ' absolute top-0 right-0' : ' absolute -top-11 md:-top-9 right-0')}
											onClick={() => setOpen(false)}
											ref={cancelButtonRef}
										>
											<CloseRedIcon />
										</button>
										{title &&
											<Dialog.Title
												as="h3"
												className="text-[22px] font-bold leading-1 text-green-light font-encode_sans_expanded mr-12"
											>
												{title}
											</Dialog.Title>
										}
										<div className="mt-6 font-montserrat">
											{children}
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
