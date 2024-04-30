import { extractTimestampInfo } from "../../../utils/helpers";
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../ui/dialog";
import { Label } from "../../ui/label";
import { Field, Formik } from "formik";
import { Button } from "../../ui/button";

const RegisterationCard = ({ setShowPopup, edit, price, type, timestamp }) => {
  const { monthDay, monthName, time, year } = extractTimestampInfo(timestamp);

  return (
    <Dialog>
      <div className="bg-[#f5f5ff] flex flex-col justify-center items-center w-[85%] mdl:w-80 py-6 px-6 rounded-3xl mt-4 mdl:mt-14">
        <div className="mb-8">
          <p className="text-cardText mb-2 mdl:inline hidden">Date & Time</p>
          <h1 className="text-cardText text-xl">{`${time} | ${monthDay}, ${monthName} ${year}`}</h1>
        </div>
        <div className="mdl:mb-8">
          <div className="flex gap-2 justify-center items-center mx-[5%] mdl:mx-0">
            <DialogTrigger
              className="flex justify-center items-center w-64 p-2  mdl:h-14 text-white mdl:mb-3 bg-deepPurple rounded-full hover:bg-[#fff] hover:text-deepPurple hover:border hover:border-deepPurple"
              onClick={() => {
                !edit && setShowPopup((oldState) => !oldState);
              }}
            >
              {edit ? (
                <div className="flex gap-4 pt-1">
                  <img
                    src={"/icons/edit.png"}
                    alt="Edit-Icon"
                    width={24}
                    height={24}
                  />
                  Edit Event
                </div>
              ) : (
                (() => {
                  // eslint-disable-next-line
                  switch (type) {
                    case "free":
                      return "Book Event (Free)";
                    case "paid":
                      return `Book Event (${price} ETH)`;
                    case "private":
                      return "Request to attend";
                  }
                })()
              )}
            </DialogTrigger>
            <div className="flex justify-center items-center p-3 bg-[#fff] rounded-full mdl:hidden">
              <img src={"/icons/bookmark.svg"} width={24} height={24} alt="bookmark" />
            </div>
            <div className="flex justify-center items-center p-3 bg-[#fff] rounded-full mdl:hidden">
              <img src={"/icons/Forward-alt.svg"} width={24} height={24} alt="forward" />
            </div>
          </div>
          {
            edit ? <DialogTrigger
              className={`gap-4 justify-center items-center w-64 h-14 bg-[f5f5ff] border border-deepPurple text-deepPurple rounded-full hover:bg-[#dddddd] mdl:flex hidden`}
            >
              <img src={"/icons/plus-large.svg"} alt="" width={20} height={20} />{" "}
              Add POAP Links
            </DialogTrigger> :
              <DialogTrigger
                className={`${edit ? "hidden" : ""
                  } gap-4 justify-center items-center w-64 h-14 bg-[f5f5ff] border border-deepPurple text-deepPurple rounded-full hover:bg-deepPurple hover:text-[#fff] mdl:flex`}
              >
                <img src={"/icons/plus-large.svg"} alt="" width={20} height={20} />{" "}
                Add to Whislist{" "}
              </DialogTrigger>
          }
        </div>
        <div className="mdl:inline hidden">
          <p className="text-cardText mb-3">Share with friends</p>
          <div className="flex gap-4">
            <img
              src={"/icons/Facebook.png"}
              width={32}
              height={32}
              alt="facebook"
            />
            <img
              src={"/icons/Instagram.png"}
              width={32}
              height={32}
              alt="instagram"
            />
            <img
              src={"/icons/Twitter.png"}
              width={32}
              height={32}
              alt="twitter"
            />
            <img
              src={"/icons/Copy.png"}
              width={20}
              height={20}
              alt="Copy"
              className="w-[32px] h-[32px] bg-black rounded-full p-1"
            />
          </div>
        </div>
      </div>
      <DialogContent className="flex justify-center items-center">
        <DialogHeader>
          <DialogTitle>Add POAP Links</DialogTitle>
          <DialogDescription>
            <Formik
              initialValues={
                {
                  links: "",
                }}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                console.log(values)
                const formData = new FormData();
                Object.keys(values).forEach((key) => {
                  formData.append(key, values[key]); // Append the image 
                });
                try {
                  // await axiosInstance.post('/events', formData);
                  console.log(formData)
                } catch (error) {
                  console.log(error)
                }
              }
              }
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Label htmlFor="email" className="text-[#222222]">POAP Links</Label>
                    <Field
                      as="textarea"
                      className="w-full font-mono h-20 p-2"
                      name="link"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter POAP links"
                      value={values.links}
                    />
                    <Button type="submit" disabled={isSubmitting} className=" bg-[#222222] text-white w-full">
                      {isSubmitting ? "Submitting Links" : "Submit"}
                    </Button>
                  </div>
                </form>
              )}
            </Formik>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterationCard;
