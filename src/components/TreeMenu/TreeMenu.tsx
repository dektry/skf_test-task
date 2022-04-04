import { FC, useState, MouseEvent } from 'react'
import { walk } from './walk'
import { Item, TreeMenuData } from './types'

export type TreeMenuChildren = (props: { items: TreeMenuItem[] }) => JSX.Element

export interface TreeMenuProps {
  data: Array<TreeMenuData>
  onClickItem?: (props: Item) => void
  children: TreeMenuChildren
}

export interface TreeMenuItem extends Item {
  active?: boolean
  onClick: (event: MouseEvent<HTMLLIElement>) => void
  toggleNode?: () => void
}

const defaultOnClick = ({ title }: Item) => console.log(title)

const TreeMenu: FC<TreeMenuProps> = ({
  data,
  onClickItem = defaultOnClick,
  children
}) => {
  const [activeKey, setActiveKey] = useState('')
  const [openNodes, setOpenNodes] = useState<string[]>([])

  const toggleItemNode = (node: string) => {
    const newOpenNodes = openNodes.includes(node)
      ? openNodes.filter((openNode) => openNode !== node)
      : [...openNodes, node]
    setOpenNodes(newOpenNodes)
  }

  const generateItems = (): TreeMenuItem[] => {
    const items: Item[] = walk({ data, openNodes })

    return items.map((item) => {
      const active = item.key === activeKey

      const onClick = () => {
        setActiveKey(item.key)
        onClickItem && onClickItem(item)
      }

      const toggleNode = item.hasNodes
        ? () => toggleItemNode(item.key)
        : undefined
      return { ...item, active, onClick, toggleNode }
    })
  }

  return children({ items: generateItems() })
}

export default TreeMenu
