import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import lookup from "@/data/lookup";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Userdetailcontext } from "@/context/Userdetail";

function Signdialog({ opendialog, closedialog }) {
  const { userdetail, setuserdetail } = useContext(Userdetailcontext);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: "Bearer " + tokenResponse?.access_token } }
      );

      console.log(userInfo);
      setuserdetail(userInfo?.data);
      closedialog(false);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <Dialog open={opendialog} onOpenChange={closedialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold text-2xl text-white text-center">
            {lookup.SIGNIN_HEADING}
          </DialogTitle>

          {/* Remove <p>, apply className directly to DialogDescription */}
          <DialogDescription className="text-center mt-4">
            {lookup.SIGNIN_SUBHEADING}
          </DialogDescription>
        </DialogHeader>

        {/* Move other content outside DialogDescription */}
        <div className="flex flex-col justify-center items-center gap-3">
          <Button
            className="bg-blue-500 text-white hover:bg-blue-300 items-center mt-3"
            onClick={googleLogin}
          >
            Sign with Google
          </Button>
          <p className="mt-2">{lookup.SIGNIn_AGREEMENT_TEXT}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Signdialog;
