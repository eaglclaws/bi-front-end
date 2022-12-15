function Frame(prop) {
	return (
		<div className="frame">
			<iframe title="article" src={prop.src}></iframe>
		</div>
	);
}

export default Frame;
