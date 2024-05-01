import React, { useState } from "react";
import { EventAttendees } from "../EventsCard/EventAttendees";
import { Location, ProfileCircle } from "iconsax-react";
import RegisterationCard from "../EventsCard/RegisterEvent";
import SuccessfulBooking from "../EventModals/Successful-booking";
import Payment from "../EventModals/Payment";
import Request from "../EventModals/Request";
import { Button } from "../../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../ui/dialog";
import { Field, Formik } from "formik";
import { Label } from "../../ui/label";
import axiosInstance from "../../../helpers/AxiosConfig";
import QRCode from "react-qr-code";

const EachEventBanner = ({ event, edit, setShowPopup, showPopup, ref }) => {
  const { attendees, location, type, price, title, host, timestamp, eventImage, id } = event;
  const [qrLink, setQrLink] = useState("")

  return (
    <>
      <div className="relative w-screen mdl:w-[100%] h-[300px] mdl:h-[446px]">
        <img src={eventImage} alt="Event" className="absolute inset-0 w-full h-full object-cover" />
        <div className="flex pb-4 px-6 justify-between absolute inset-0">
          <div className="flex flex-col justify-between mdl:w-3/5">
            <div className="flex z-50 mt-20 gap-5">
              <Dialog>
                <DialogTrigger className="p-3 bg-[#ffffff]/70 pt-4 text-black font-black w-[200px] h-[50px] hover:text-white">Create Tickets
                </DialogTrigger>
                <DialogContent className="flex justify-center items-center">
                      <DialogHeader>
                        <DialogTitle>Create your event ticket</DialogTitle>
                        <DialogDescription>
                          <Formik
                            initialValues={{
                              quantity:0,
                              eventId: Number(id),
                              ticketId: 1,
                            }}
                            onSubmit={async (values, { setSubmitting }) => {
                              setSubmitting(true);
                              const formData = new FormData();
                              formData.append("quantity", values.quantity);
                              formData.append("eventId", values.eventId);
                              formData.append("ticketId", values.ticketId);
                              try {
                                const response = await axiosInstance.post('/events/create-event-ticket', formData);
                                console.log(response.data.data)
                                console.log(values)
                                console.log(formData);
                              } catch (error) {
                                console.log(error);
                              }
                            }}
                          >
                            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                              <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                  <Label htmlFor="links" className="text-[#222222]">
                                    Ticket Quantity
                                  </Label>
                                  <Field
                                    as="input"
                                    className="w-full font-mono p-2 mb-6 border"
                                    type="number"
                                    name="quantity"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter user's address"
                                    value={values.quantity}
                                  />
                                  <Label htmlFor="links" className="text-[#222222]">
                                    Ticket type
                                  </Label>
                                  <Field
                                    as="select"
                                    className="w-full font-mono mb-6 p-2 border"
                                    name="ticketId"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter user's address"
                                    value={values.ticketId}
                                  >
                                    <option value={0}>Regular</option>
                                    <option value={1}>VIP</option>
                                    <option value={2}>VVIP</option>
                                  </Field>
                                  <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#222222] text-white w-full"
                                  >
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
              <Dialog>
                <DialogTrigger className="p-3 bg-[#ffffff]/70 text-black font-black pt-4 w-[200px] h-[50px] hover:text-white">Mint POAP</DialogTrigger>
                {
                  qrLink === "" ?
                    <DialogContent className="flex justify-center items-center">
                      <DialogHeader>
                        <DialogTitle>Claim POAP</DialogTitle>
                        <DialogDescription>
                          <Formik
                            initialValues={{
                              userAddr: "",
                              eventId: Number(id),
                              ticketId: 1,
                            }}
                            onSubmit={async (values, { setSubmitting }) => {
                              setSubmitting(true);
                              const formData = new FormData();
                              formData.append("userAddr", values.userAddr);
                              formData.append("eventId", values.eventId);
                              formData.append("ticketId", values.ticketId);
                              try {
                                const response = await axiosInstance.post('/events/cliam', formData);
                                setQrLink(response.data.data)
                                console.log(response.data.data)
                                console.log(values)
                                console.log(formData);
                              } catch (error) {
                                console.log(error);
                              }
                            }}
                          >
                            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                              <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                  <Label htmlFor="links" className="text-[#222222]">
                                    User Address
                                  </Label>
                                  <Field
                                    as="input"
                                    className="w-full font-mono mb-6 p-2 border"
                                    name="userAddr"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter user's address"
                                    value={values.userAddr}
                                  />
                                  <Label htmlFor="links" className="text-[#222222]">
                                    Ticket type
                                  </Label>
                                  <Field
                                    as="select"
                                    className="w-full font-mono mb-6 p-2 border"
                                    name="ticketId"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter user's address"
                                    value={values.ticketId}
                                  >
                                    <option value={0}>Regular</option>
                                    <option value={1}>VIP</option>
                                    <option value={2}>VVIP</option>
                                  </Field>
                                  <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#222222] text-white w-full"
                                  >
                                    {isSubmitting ? "Submitting Links" : "Submit"}
                                  </Button>
                                </div>
                              </form>
                            )}
                          </Formik>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                    : 
                    <DialogContent className="flex justify-center items-center">
                      <DialogHeader>
                        <DialogTitle>Scan POAP Link</DialogTitle>
                        <DialogDescription>
                          <QRCode
                            size={300}
                            bgColor="white"
                            fgColor="black"
                            value={qrLink}
                          />
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                }

              </Dialog>
            </div>
            <div className="">
              <div className="flex gap-2 items-center mb-6">
                <EventAttendees attendees={attendees} />
                <p className="text-[#fff]">Attendees</p>
              </div>
              <h1 className="font-extrabold text-[#fff] w-full text-xl mdl:text-5xl mb-6">{title}</h1>
              <p className="text-[#fff] text-sm">Host by:</p>
              <div className="flex items-center">
                <div className="rounded-full">
                  <ProfileCircle className="text-white w-[32px] mdl:w-[64px]" />
                </div>
                <h1 className="text-lg mdl:text-xl ml-2 mt-3 text-[#fff] mdl:font-bold">{host}</h1>
              </div>
              <div className="flex items-center">
                <Location className="text-white w-[32px] mdl:w-[64px]" />
                <div className="ml-2 mt-3 text-[#fff] mdl:font-bold text-lg mdl:text-xl">
                  {location}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden mdl:flex w-2/5 justify-center">
            <RegisterationCard setShowPopup={setShowPopup} price={price} type={type} id={id} edit={edit} timestamp={timestamp} className="mt-20 mdl:mt-10 hidden mdl:inline" />
          </div>
        </div>
      </div>
      {showPopup && (() => {
        // eslint-disable-next-line 
        switch (type) {
          case "free":
            return <SuccessfulBooking setShowPopup={setShowPopup} ref={ref} />;
          case "paid":
            return <Payment setShowPopup={setShowPopup} ref={ref} host={host} price={price} />;
          case "private":
            return <Request setShowPopup={setShowPopup} ref={ref} />;
        }
      })()}
    </>
  );
};

export default EachEventBanner;
