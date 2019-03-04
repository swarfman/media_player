import React from "react";
import { Player } from "./player.jsx";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Player />
			</div>
		);
	}
}
