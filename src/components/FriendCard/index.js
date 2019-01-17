import React from "react";
import "./style.css";

function FriendCard(props) {
	return (
		<div className="card">
			<div className="img-container">
				<span onClick={() => props.clicked(props.id)} className="click">
					<img alt={props.name} src={props.image} />
				</span>
			</div>
		</div>
	);
}

export default FriendCard;
