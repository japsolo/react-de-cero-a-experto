import User from '../User';

const UsersList = props => {
	return (
		<ul>
			{ 
				props.listado.map(oneUser => <li key={oneUser.id}> <User {...oneUser} /> </li>)
			}
		</ul>
	)
}

export default UsersList;