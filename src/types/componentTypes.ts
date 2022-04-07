import { TreeNodeModel } from "./api";

export interface ITreeNode {
  label: string;
  nodes: TreeNodeModel[];
  isEmpty: boolean;
  toggled?: boolean;
  parent?: boolean;
}
