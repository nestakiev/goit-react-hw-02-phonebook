import PropTypes from "prop-types";

export const ContactList = ({contacts, onDelete}) => {
    return (
    <ul>
{contacts.map(a => <li key={a.id}>
    <p>{a.name}: {a.number}</p>
    <button type="button" key={a.id} onClick={() => onDelete(a.id)}>Delete</button>
    </li>)}
    </ul>)
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.node.isRequired,
    })),

}