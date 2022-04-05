import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { TreeNode } from '../TreeMenu/TreeMenu';
import styles from './styles.module.css';

interface NodeProps {
  node: TreeNode;
  renderNodes: (node: TreeNode, index: number) => void;
  parenNodeIsCollapsed?: boolean;
}

export const CollapsibleNode = ({ parenNodeIsCollapsed, node, renderNodes }: NodeProps) => {
  const collapsibleNodeContainer = useRef<HTMLDivElement>(null);

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [unCollapsedHeight, setUnCollapsedHeight] = useState('');

  useEffect(() => {
    const elementHeight = collapsibleNodeContainer.current?.scrollHeight;
    elementHeight && setUnCollapsedHeight(elementHeight + 'px');
  }, []);

  useEffect(() => {
    if (parenNodeIsCollapsed) setIsCollapsed(true);
  }, [parenNodeIsCollapsed]);

  return (
    <div>
      <p onClick={() => setIsCollapsed(!isCollapsed)}>{node.title}</p>
      <div style={{ transition: 'height 1s', height: isCollapsed ? 0 : unCollapsedHeight }}>
        <div
          ref={collapsibleNodeContainer}
          className={clsx([styles.nodeContainer, styles.nestedLevel, isCollapsed && styles.nestedLevelCollapsed])}
          onTransitionEnd={() => setUnCollapsedHeight('100%')}
        >
          {node.nodes.map(renderNodes, { parenNodeIsCollapsed: isCollapsed })}
        </div>
      </div>
    </div>
  );
};
