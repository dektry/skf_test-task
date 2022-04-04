import React, { useEffect, useState } from 'react'
import { getMenuData } from 'services/menu'
import { TreeMenuData, TreeMenu, TreeMenuItem } from 'components'

function App() {
  const [treeData, setTreeData] = useState<Array<TreeMenuData>>([])

  useEffect(() => {
    getMenuData()
      .then(({ data }) => setTreeData(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <TreeMenu data={treeData}>
        {({ items }) => (
          <ul className="tree-items">
            {items.map((item) => (
              <TreeMenuItem {...item} />
            ))}
          </ul>
        )}
      </TreeMenu>
    </div>
  )
}

export default App
