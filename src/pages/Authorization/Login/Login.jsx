import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loader from "@/components/Loader";
import React from "react";

const Login = React.memo((props) => {
  const {
    handleChange,
    loginFormData,
    handleSubmit,
    loading,
    btnIsDisabled,
    onTabChange,
  } = props;

  const { email, password } = loginFormData;

  return (
    <form onSubmit={handleSubmit}>
      <Tabs
        defaultValue="login"
        onValueChange={onTabChange}
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Log In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle className="text-center mb-2">Sign Up</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  value={password}
                  onChange={handleChange}
                  type="password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={!btnIsDisabled || loading}
                type="submit"
                className="w-full"
              >
                {loading ? <Loader /> : "Login"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </form>
  );
});

export default Login;
