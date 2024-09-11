import React from 'react'

const YoutubeEmbed = ({ codigo_embed }) => {
	const link = `https://www.youtube.com/embed/${codigo_embed}`
	return (
		<iframe
			width="560"
			height="315"
			src={link}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	)
}

export default YoutubeEmbed