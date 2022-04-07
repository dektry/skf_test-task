export interface TreeNodeModel {
  label: string;
  key: string;
  nodes: TreeNodeModel[];
}

export interface MenuPayloadModel {
  root: TreeNodeModel[];
}
