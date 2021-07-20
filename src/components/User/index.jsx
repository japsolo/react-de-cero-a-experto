const User = props => {
	const { email, name, bio } = props || {};
	return (
		<div>
			<h3> {name} </h3>
			{bio ? <p> {bio} </p> : '' }
			<a href="/"> {email} </a>
		</div>
	)
}

export default User;