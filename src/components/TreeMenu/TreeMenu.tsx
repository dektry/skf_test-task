import { useEffect, useState } from 'react';

import styles from './styles.module.css';
import { CollapsibleNode } from '../CollapsibleNode/CollapsibleNode';
import { Icon } from '../Icon/Icon';

export type TreeNode = { title: string; nodes: TreeNode[] };

export const TreeMenu = () => {
  const [data, setData] = useState<TreeNode[] | null>(null);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const renderLevel = function (this: { parenNodeIsCollapsed: boolean }, node: TreeNode, index: number) {
    if (node.nodes.length) {
      return (
        <CollapsibleNode key={node.title + index} node={node} renderNodes={renderLevel} parenNodeIsCollapsed={this?.parenNodeIsCollapsed} />
      );
    } else {
      return (
        <div className={styles.titleWrapper}>
          <Icon />
          <p key={node.title + index} className={styles.node}>
            {node.title}
          </p>
        </div>
      );
    }
  };

  return data && <div className={styles.container}>{data.map(renderLevel)}</div>;
};
