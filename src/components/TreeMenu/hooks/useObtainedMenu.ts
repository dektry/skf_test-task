import MenuAPI from "APIs/MenuAPI";
import { useEffect, useState } from "react";
import { MenuPayloadModel } from "types/api";

const useObtainedMenu = () => {
  const [menuPayload, setMenuPayload] = useState<MenuPayloadModel>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    MenuAPI.Obtain().then((payload: MenuPayloadModel) => {
      setTimeout(() => {
        setMenuPayload(payload);
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  return { isLoading, menuPayload };
};

export default useObtainedMenu;
