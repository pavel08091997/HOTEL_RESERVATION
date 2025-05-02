import { ControlPanel } from './control-panel';
import { Icon } from './icon';
import styles from './header.module.css';

export const Header = () => {
	return (
		<>
			<div className={styles.header}>
				<Icon />
				<ControlPanel />
			</div>
		</>
	);
};
