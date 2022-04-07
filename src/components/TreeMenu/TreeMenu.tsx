import Loader from "components/Loader";
import TreeNode from "components/TreeNode";
import React from "react";
import useObtainedMenu from "components/TreeMenu/hooks/useObtainedMenu";
import style from "components/TreeMenu/TreeMenu.less";

function TreeMenu() {
  const { isLoading = true, menuPayload } = useObtainedMenu() || {};

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className={style.container}>
          <TreeNode label="" nodes={menuPayload.root} isEmpty={!!menuPayload.root.length} parent />
        </div>
      )}
    </>
  );
}

export default TreeMenu;
