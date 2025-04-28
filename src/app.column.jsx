import styles from './app.column.module.css';
import PropTypes from 'prop-types';

export const AppColumn = ({ children }) => {
	return <div className={styles.appColumn}>{children}</div>;
};


// children обязательны и могут быть любого типа
AppColumn.propTypes = {
	children: PropTypes.node.isRequired,
};
