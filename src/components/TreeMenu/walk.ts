import isEmpty from 'is-empty'
import { Item, TreeMenuData } from './types'

type TreeMenuDataInArray = Array<TreeMenuData>

interface WalkProps {
  data: TreeMenuDataInArray | undefined
  parent?: string
  level?: number
  openNodes: string[]
}

interface ItemProps {
  parent: string
  level: number
  openNodes: string[]
  node: TreeMenuData
  nodeName: string
  index?: number
}

const validateData = (data: WalkProps['data']): boolean =>
  !!data && !isEmpty(data)

const getValidatedData = (data: WalkProps['data']) =>
  validateData(data) ? (data as TreeMenuDataInArray) : []

const generateItem = ({ node, nodeName, ...props }: ItemProps): Item[] => {
  const { parent, level, openNodes } = props

  const { nodes, title, ...nodeProps } = node
  const key = [parent, nodeName].filter((x) => x).join('/')
  const hasNodes = validateData(nodes)
  const isOpen = hasNodes && openNodes.includes(key)

  const currentItem = { ...props, ...nodeProps, title, hasNodes, isOpen, key }

  const data = getValidatedData(nodes)
  const nextLevelItems = isOpen
    ? walk({
        data,
        ...props,
        parent: key,
        level: level + 1
      })
    : []

  return [currentItem, ...nextLevelItems]
}

export const walk = ({ data, ...props }: WalkProps): Item[] => {
  const validatedData = getValidatedData(data)
  const propsWithDefaultValues = { parent: '', level: 0, ...props }
  return validatedData.reduce((acc: Item[], node: TreeMenuData, index) => {
    const itemProps = {
      node,
      index,
      nodeName: node.key,
      ...propsWithDefaultValues
    }
    const item = generateItem(itemProps)
    return [...acc, ...item]
  }, [])
}
