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
			//url: undefined
		};
	}

	playSong = url => {
		//console.log(url);
		this.url.src =
			"https://assets.breatheco.de/apis/sound/" +
			url.replace("data", "files");
		this.url.play();
		this.playBtn.style.display = "none";
		this.pauseBtn.style.display = "inline-block";
		// if ((this.url.src = undefined)) {
		// 	this.url.src =
		// 		"https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3";
		// }
	};

	pauseSong = url => {
		//console.log(url);
		this.url.src = url;
		this.url.pause();
		this.pauseBtn.style.display = "none";
		this.playBtn.style.display = "inline-block";
	};

	componentDidMount = () => {
		fetch("http://assets.breatheco.de/apis/sound/data/songs.json")
			.then(res => res.json())
			.then(yoyo => {
				let x = this.state.songs;
				this.setState({ songs: yoyo });
			});

		fetch("http://assets.breatheco.de/apis/sound/data/fx.json")
			.then(res => res.json())
			.then(x => {
				let y = this.state.songs;
				this.setState({ songs: y.concat(x) });
			});
	};

	render() {
		return (
			<div className="row">
				<div className="player-container col-6">
					<div className="text-white">
						<h1 className="text-center p-3">
							Brought to You by WarfMedia
						</h1>
						<div className="footer container-fluid d-flex p-2 m-0 justify-content-between">
							<i
								className="skipIcon fas fa-step-backward"
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
							<i className=" skipIcon fas fa-fast-forward" />
						</div>
						<ol className="listOfSongs">
							{this.state.songs.map((elem, index) => {
								return (
									<li
										className="song border-bottom"
										key={index}
										onClick={() => this.playSong(elem.url)}>
										{elem.name}{" "}
									</li>
								);
							})}
							<audio ref={t => (this.url = t)} />
						</ol>
						{/*	<div className="footer container-fluid d-flex p-2 m-0 justify-content-between">
							<i
								className="skipIcon fas fa-step-backward"
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
							<i className=" skipIcon fas fa-fast-forward" />
						</div>*/}
					</div>
				</div>
			</div>
		);
	}
}
