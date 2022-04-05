import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { TreeNode } from '../TreeMenu/TreeMenu';
import styles from './styles.module.css';
import { Icon } from '../Icon/Icon';

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

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleEndOFTransition = () => {
    if (isCollapsed) {
      const elementHeight = collapsibleNodeContainer.current?.scrollHeight;
      elementHeight && setUnCollapsedHeight(elementHeight + 'px');
    } else {
      setUnCollapsedHeight('100%');
    }
  };

  return (
    <>
      <div className={styles.titleWrapper}>
        <Icon collapsed={isCollapsed} />
        <p className={styles.nodeTitle} onClick={handleCollapse}>
          {node.title}
        </p>
      </div>
      <div style={{ transition: 'height .5s', height: isCollapsed ? 0 : unCollapsedHeight }}>
        <div
          className={clsx([styles.nestedLevel, isCollapsed && styles.nestedLevelCollapsed])}
          ref={collapsibleNodeContainer}
          onTransitionEnd={handleEndOFTransition}
        >
          {node.nodes.map(renderNodes, { parenNodeIsCollapsed: isCollapsed })}
        </div>
      </div>
    </>
  );
};
