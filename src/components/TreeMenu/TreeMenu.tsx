import { useEffect, useState } from 'react';

import styles from './styles.module.css';

type TreeNode = { title: string; nodes: TreeNode[] };

export const TreeMenu = () => {
  const [data, setData] = useState<TreeNode[] | null>(null);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setData(data));
  });

  return data && <p className={styles.bold}>TreeMenu</p>;
};
