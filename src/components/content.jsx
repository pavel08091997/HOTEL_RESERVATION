import styles from './content.module.css'


// eslint-disable-next-line react/prop-types
export const Page = ({ children }) => {
	return <div className={styles.content}>{children} </div>;
};
