import classNames from "classnames/bind";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { TreeNodeModel } from "types/api";
import { ITreeNode } from "types/componentTypes";
import style from "components/TreeNode/TreeNode.less";

const TreeNode: React.FC<ITreeNode> = ({ label, nodes, parent, isEmpty }) => {
  const [expanded, setExpanded] = useState<boolean>(parent);

  const nodeClass = classNames(style.menuNode, expanded ? style.disclosed : style.collapsed);
  const labelClass = classNames(label && style.label, isEmpty && style.collapsable);

  const handleClick = <T extends React.MouseEvent | React.KeyboardEvent>(e: T): void => {
    if (parent) return;

    e.stopPropagation();
    setExpanded(prev => !prev);
    console.info(label);
  };

  return (
    <div role="button" tabIndex={0} className={nodeClass} onClick={handleClick} onKeyDown={handleClick}>
      <div className={labelClass}>{label}</div>
      {nodes.map(
        (node: TreeNodeModel) =>
          expanded && (
            <TreeNode
              key={nanoid()}
              label={node.label}
              nodes={node.nodes}
              toggled={expanded}
              isEmpty={!!node.nodes.length}
            />
          )
      )}
    </div>
  );
};

export default TreeNode;
