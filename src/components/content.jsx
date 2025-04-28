import styles from './content.module.css'
import PropTypes from 'prop-types';

export const Content = ({ children }) => {
	return <div className={styles.content}>{children}
	<h2>Контент страницы</h2></div>;
};


// children обязательны и могут быть любого типа
Content.propTypes = {
	children: PropTypes.node.isRequired,
};
