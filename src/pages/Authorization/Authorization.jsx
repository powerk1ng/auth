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
import { useState } from "react";

const Authorization = (props) => {
  const {
    setSelectValue,
    handleChange,
    loginFormData,
    setLoginFormData,
    signUpFormData,
    setSignUpFormData,
    handleSubmit,
  } = props;

  const [loading, setLoading] = useState(false);

  return (
    <form className="">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Log In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        {/* login */}
        <TabsContent value="login">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Log In</CardTitle>
            </CardHeader>
            <CardContent className="mb-4">
              <div className="space-y-2 mb-4">
                <Label htmlFor="email">Email</Label>
                <Input name="email" onChange={(e) => handleChange(setLoginFormData, loginFormData, e)} id="email" placeholder="example@gmail.com" />
              </div>
              <div className="space-y-2 mb-2">
                <Label htmlFor="password">Password</Label>
                <Input name="password" onChange={(e) => handleChange(setLoginFormData, loginFormData, e)} id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={(e) => handleSubmit(loginFormData, e)}
                disabled={loading ? true : false} className="w-full">
                {loading ? <Loader /> : "Submit"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* register */}

        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle className="text-center mb-2">Sign Up</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input name="email" onChange={(e) => handleChange(setSignUpFormData, signUpFormData, e)} id="email" placeholder="example@gmail.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input name="password" onChange={(e) => handleChange(setSignUpFormData, signUpFormData, e)} id="password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input name="confirmPassword" onChange={(e) => handleChange(setSignUpFormData, signUpFormData, e)} id="confirmPassword" type="password" />
              </div>

              <Select onValueChange={(value) => setSelectValue(value)}>
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
              <Button onClick={(e) => handleSubmit(signUpFormData, e)} className="w-full">Sing Up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </form>
  );
};

export default Authorization;
