import { FC } from 'react'
import { ArrowDown } from 'icons'
import styles from './treeMenu.module.scss'
import classNames from 'classnames'

interface ItemToggleProps {
  hasNodes: boolean
  isOpen: boolean
  toggleNode?: () => void
}

const ItemToggle: FC<ItemToggleProps> = ({
  hasNodes = false,
  isOpen = false,
  toggleNode
}) =>
  hasNodes ? (
    <div
      className={classNames(styles.toggleIcon, {
        [styles.toggleIconActive]: isOpen
      })}
      onClick={(e) => {
        hasNodes && toggleNode && toggleNode()
        e.stopPropagation()
      }}
    >
      <ArrowDown />
    </div>
  ) : null

export default ItemToggle
