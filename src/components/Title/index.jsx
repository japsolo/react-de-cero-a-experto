const Title = (props) => {
	const { fecha, pais } = props;
 	return (
		<div>
			<h2> { fecha } y { pais } </h2>
			{ props.children }
		</div>
	)
}

export default Title;