import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  const sendDataToApp = () => {
    console.log(value);
    setValue("");
  };

  return (
    <div className=" w-full h-[100vh]  flex flex-col justify-center items-center ">
      <div className="w-100 flex flex-col gap-2">
        <div className="flex gap-4">
          <Input
            className="w-60 "
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={sendDataToApp}>傳送資料給App</Button>
        </div>
        <Alert variant="default">
          <AlertTitle>給App修改的字</AlertTitle>
          <AlertDescription>這是原本React裡面的字</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
