export interface TreeMenuData {
  key: string
  title: string
  nodes?: Array<TreeMenuData>
}

export interface Item {
  hasNodes: boolean
  isOpen: boolean
  level: number
  key: string
  title: string
}
