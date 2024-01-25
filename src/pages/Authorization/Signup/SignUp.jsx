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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loader from "@/components/Loader";
import React from "react";

const SignUp = React.memo((props) => {
  const {
    handleSelectionChange,
    handleChange,
    signUpFormData,
    handleSubmit,
    loading,
    btnIsDisabled,
    onTabChange,
  } = props;

  const { email, password, confirmPassword, role } = signUpFormData;

  return (
    <form onSubmit={handleSubmit}>
      <Tabs
        defaultValue="signup"
        onValueChange={onTabChange}
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Log In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        <TabsContent value="signup">
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
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  type="password"
                />
              </div>

              <Select
                onValueChange={(value) => handleSelectionChange(value)}
                value={role}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="guest">Guest</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
            <CardFooter>
              <Button
                disabled={!btnIsDisabled || loading}
                type="submit"
                className="w-full"
              >
                {loading ? <Loader /> : "Sing up"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </form>
  );
});

export default SignUp;
