/* eslint-disable @typescript-eslint/no-misused-promises */
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useAddUser, useUpdateUser } from "../../hooks/useUsers";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { User } from "../../types";
import { useToast } from "../ui/use-toast";
import BaseError from "@/errors/base-error";

interface UserContactProps {
  userClicked: User;
  editName: boolean;
  setRefresh: () => void;
  isNewUser: boolean;
}

export function UserContact({
  userClicked,
  editName,
  setRefresh,
  isNewUser,
}: UserContactProps) {
  const [userState, setUserState] = useState<User>(userClicked);
  const { register, handleSubmit } = useForm<User>();
  const [switchChecked, setSwitchChecked] = useState(userClicked.status);
  const { addData } = isNewUser ? useAddUser() : useUpdateUser();
  const { toast } = useToast();
  const toastInfo = {
    title: "",
    description: "",
  };

  // Submit handler. It takes all the new data and set it to the state
  const onSubmit: SubmitHandler<User> = async (data) => {
    const userData = userState;
    const newData = {
      ...userData,
      name: data.name ? data.name : userData.name,
      mail: data.mail ? data.mail : userData.mail,
      status: switchChecked,
    };
    setUserState(newData);
    try {
      await addData(newData);
      setRefresh();
      toastInfo.title = "Data added correctly";
      toastInfo.description =
        "The user data has been added to Data Base correctly.";
    } catch (error) {
      toastInfo.description = "The user data has not been added to Data Base.";
      if (error instanceof BaseError) {
        toastInfo.description = error.message;
      }
      toastInfo.title = "Unable to add user data";
    }
    toast(toastInfo);
  };

  return (
    <>
      {/* Contact Information */}
      <h2 className=" text-xl p-2">Contact Information</h2>
      <section className="grid grid-rows-1 grid-flow-row p-2 gap-10 shadow-sm w-full text-black mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 ">
            {editName && (
              <div className="grid w-full max-w-sm items-center gap-1.5 shadow-sm">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name"
                  defaultValue={userState.name}
                  {...register("name")}
                />
              </div>
            )}
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                defaultValue={userState.mail}
                {...register("mail", { required: true })}
                className="border-none"
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                type="text"
                id="location"
                placeholder="Location"
                defaultValue="Madrid"
                className="border-none"
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                type="text"
                id="company"
                placeholder="Company"
                defaultValue="Apex"
                className="border-none"
              />
            </div>
            <div>
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                type="text"
                id="jobTitle"
                placeholder="Job Title"
                defaultValue="Software Engineer, DevOps"
                className="border-none"
              />
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <Input
                type="text"
                id="department"
                placeholder="Deparment"
                defaultValue="DevOps"
                className="border-none"
              />
            </div>
            <div className="flex items-center space-x-2 pt-5">
              <Switch
                className={`${switchChecked ? "!bg-[#E87722]" : "bg-gray-500"}`}
                id="user_status"
                defaultChecked={switchChecked}
                onCheckedChange={(checked) => {
                  setSwitchChecked(checked);
                }}
              />
              <Label htmlFor="user_status">Active</Label>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="button-orange-apex mt-8 shadow-gray-400 cursor-pointer"
          />
        </form>
      </section>
      {/* Organization */}
      <section className="mt-12">
        <h2 className="text-xl">Applications</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 p-2 mt-6">
          <Card className="bg-gray-100 ">
            <CardHeader>
              <CardTitle>Agency Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>An integrated loan agency and portfolio management platform</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-100 ">
            <CardHeader>
              <CardTitle>Participate</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Dynamic GP and LP Document and Data Portals</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-100 ">
            <CardHeader>
              <CardTitle>Spotlight Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Spotlight internal tools: Help and upload information</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
