import React from "react";
import PropTypes from "prop-types";

export class Player extends React.Component {
	constructor() {
		super();
		this.state = {
			songs: [
				{
					title: "Mario Castle",
					id: "mario",
					author: "Bowser",
					url:
						"https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
				},
				{
					title: "Zelda",
					id: "zelda",
					author: "Ganondorf",
					url:
						"https://assets.breatheco.de/apis/sound/files/videogame/fx_zelda_recorder.wav"
				},
				{
					title: "X-Men",
					id: "x-men",
					author: "Magneto",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
				}
			]
		};
	}

	playSong = url => {
		//console.log(url);
		this.url.src = url;
		this.url.play();
		this.playBtn.style.display = "none";
		this.pauseBtn.style.display = "inline-block";
	};

	pauseSong = url => {
		console.log(url);
		this.url.src = url;
		this.url.pause();
		this.pauseBtn.style.display = "none";
		this.playBtn.style.display = "inline-block";
	};

	render() {
		return (
			<div className="row">
				<div className="player-container col-6">
					<div className="text-white">
						<h1 className="text-center p-3">
							Brought to You by WarfMedia
						</h1>
						<ol className="listOfSongs">
							{this.state.songs.map((elem, index) => {
								return (
									<li
										className="song border-bottom"
										key={index}
										onClick={() => this.playSong(elem.url)}>
										{elem.title}{" "}
										<p className="mutedText">
											by {elem.author}
										</p>
									</li>
								);
							})}
							<audio ref={t => (this.url = t)} />
						</ol>
						<div className="footer container-fluid d-flex p-2 m-0 justify-content-between">
							<i
								className="fas fa-step-backward"
								ref={t => (this.skipBack = t)}
							/>

							<i
								className="playIcon fas fa-play"
								ref={t => (this.playBtn = t)}
								onClick={() => this.playSong()}
							/>
							<i
								className="pauseIcon fas fa-pause"
								ref={t => (this.pauseBtn = t)}
								onClick={() => this.pauseSong()}
							/>
							<i className="fas fa-fast-forward" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
