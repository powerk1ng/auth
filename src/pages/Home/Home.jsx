import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { useShallowEqualSelector } from "@/hooks/storeHooks";
import { selectLogoutLoading } from "@/store/selectors/selectors";
import React from "react";

const Home = ({ handleLogout }) => {
  const loading = useShallowEqualSelector(selectLogoutLoading);

  return (
    <div>
      <Button 
        variant="destructive" 
        onClick={handleLogout}>
            {loading 
                ? <Loader /> 
                : "Logout"}
    </Button>
    </div>
  );
};

export default Home;
