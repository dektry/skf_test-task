import styles from './styles.module.css';
import clsx from 'clsx';

interface IconProps {
  collapsed?: boolean;
}

export const Icon = ({ collapsed = false }: IconProps) => {
  return <div className={clsx([styles.icon, collapsed && styles.collapsed])}>{collapsed ? '+' : '-'}</div>;
};
