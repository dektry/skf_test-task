import { FC } from 'react'
import classNames from 'classnames'
import { TreeMenuItem } from './TreeMenu'
import ItemToggle from './ItemToggle'
import styles from './treeMenu.module.scss'

const DEFAULT_PADDING = 0.75
const ICON_SIZE = 2.25
const LEVEL_SPACE = 1.75

const MenuItem: FC<TreeMenuItem> = ({
  hasNodes = false,
  isOpen = false,
  level = 0,
  onClick,
  toggleNode,
  active,
  title
}) => (
  <li
    className={classNames(styles.treeItem, `tree-item-level${level}`, {
      [styles.treeItemActive]: active
    })}
    style={{
      paddingLeft: `${
        DEFAULT_PADDING + ICON_SIZE * (hasNodes ? 0 : 1) + level * LEVEL_SPACE
      }rem`
    }}
    role="button"
    aria-pressed={active}
    onClick={onClick}
  >
    <ItemToggle hasNodes={hasNodes} toggleNode={toggleNode} isOpen={isOpen} />
    {title}
  </li>
)

export default MenuItem
