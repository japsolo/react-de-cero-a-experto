import Types from 'prop-types';

import User from '../User';

const UsersList = (props) => {
	return (
		<div>
			<h2>{props.title}</h2>
			<ul>
				{ props.listado.map(oneUser => <li key={oneUser.id}> <User {...oneUser} /> </li>) }
			</ul>
		</div>
	)
}

UsersList.defaultProps = {
	title: 'Che, no te olvidés de mandar el title'
}

UsersList.propTypes = {
	listado: Types.arrayOf(Types.object).isRequired,
	title: Types.string.isRequired,
}

export default UsersList;