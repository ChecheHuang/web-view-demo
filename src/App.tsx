import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { createRef, useState } from "react";
import { bankCode } from "./bankCode";
import CommandDemo from "./components/CommandDemo";
declare const JsTest: {
  showToast: (message: string) => void;
};
function calledFromAndroid(msg: string) {
  alert("calledFromAndroid");
  document!.getElementById("mytext")!.innerHTML = msg;
}
export default function Home() {
  const inputRef = createRef<HTMLInputElement>();
  const [text, setText] = useState("這是原本React裡面的字");

  const sendDataToApp = () => {
    if (!inputRef.current) return;
    showAndroidToast(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  // function calledFromAndroid(msg: string) {
  //   setText(msg);
  // }

  function showAndroidToast(toast: string) {
    console.log("傳給APP", toast);
    JsTest.showToast(toast);
  }

  return (
    <div className=" w-full h-[100vh]  flex flex-col justify-center items-center ">
      <div className="w-100 flex flex-col gap-2">
        <Button onClick={() => calledFromAndroid("給App用的方法")}>
          測試給App的方法
        </Button>
        <div className="flex gap-4">
          <Input className="w-60 " ref={inputRef} />
          <Button onClick={sendDataToApp}>傳送資料給App</Button>
        </div>
        <Alert variant="default">
          <AlertTitle>給App修改的字</AlertTitle>
          <AlertDescription id="mytext">{text}</AlertDescription>
        </Alert>
        <CommandDemo />
      </div>
    </div>
  );
}
