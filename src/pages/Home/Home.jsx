import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { useShallowEqualSelector } from "@/hooks/storeHooks";
import { selectLogoutLoading } from "@/store/selectors/selectors";
import React from "react";

const Home = ({ handleLogout, getUsers }) => {
  const loading = useShallowEqualSelector(selectLogoutLoading);

  return (
    <div>
      <Button variant="destructive" onClick={handleLogout}>
        {loading ? <Loader /> : "Logout"}
      </Button>

      <div>
        <Button variant="outline" onClick={getUsers}>
          Get users
        </Button>
      </div>
    </div>
  );
};

export default Home;
