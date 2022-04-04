import axios, { AxiosResponse } from 'axios'
import { TreeMenuData } from 'components'

export const getMenuData = async (): Promise<
  AxiosResponse<Array<TreeMenuData>>
> => {
  return await axios.get('./treeData.json')
}
