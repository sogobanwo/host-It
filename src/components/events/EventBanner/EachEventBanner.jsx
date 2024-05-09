import React, { useState } from "react";
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
import toast from "react-hot-toast";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { ethers } from "ethers";
import useGetEventTicketSupply from "../../../Functions/useGetEventTicketSupply";
import useGetAllEvents from "../../../Functions/useGetAllEvents";
import { useParams } from "react-router-dom";


const EachEventBanner = ({ edit, setShowPopup, showPopup, ref }) => {
  const events = useGetAllEvents();
  console.log(events)
  const param = useParams()
  const eventid = param.id
  let event;
  let startTime, eventId, eventAddress, eventName, organizer

  const totTickets = useGetEventTicketSupply()

  if (!events.loading) {
    event = events.data.find((event) => event.eventId === Number(eventid));
    if (event) {
      startTime = event.startTime
      eventId = event.eventId
      eventName = event.eventName
      organizer = event.organizer
      eventAddress = event.eventAddress
    }
  }

  const [formStep, setFormStep] = useState(0)
  const [email, setEmail] = useState("")

  const [qrLink, setQrLink] = useState("")

  const { address } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()
  const provider = new ethers.BrowserProvider(walletProvider)

  console.log(totTickets)

  return (
    <>
      <div className="relative w-screen mdl:w-[100%] h-[300px] mdl:h-[446px]">
        {/* <img src={eventImage} alt="Event" className="absolute inset-0 w-full h-full object-cover" /> */}
        <div className="flex pb-4 px-6 justify-between absolute inset-0">
          <div className="flex flex-col justify-between mdl:w-3/5">
            <div className="flex z-50 mt-20 gap-5">
              <Dialog>
                {address === organizer ? <DialogTrigger className="p-3 bg-[#ffffff]/70 pt-4 text-black font-black w-[200px] h-[50px] hover:text-white">Create Tickets
                </DialogTrigger> : ''}
                <DialogContent className="flex justify-center items-center">
                  <DialogHeader>
                    <DialogTitle>Create your event ticket</DialogTitle>
                    <DialogDescription>
                      <Formik
                        initialValues={{
                          quantity: 0,
                          ticketId: 1,
                          organizer: address,
                          price: 1,
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                          setSubmitting(true);
                          const toast1 = toast.loading('Creating Ticket')
                          const formData = new FormData();
                          formData.append("quantity", values.quantity);
                          formData.append("ticketId", values.ticketId);
                          formData.append("organizer", values.organizer);
                          formData.append("price", values.price)
                          try {
                            const signer = await provider.getSigner();
                            const signature = await signer.signMessage(JSON.stringify(values))
                            const response = await axiosInstance.post(`/events/${eventId}/create-event-ticket`, formData);
                            toast.remove(toast1)
                            toast.success("Tickets Created")
                            console.log(response.data.data)
                            console.log(values)
                            console.log(formData);
                          } catch (error) {
                            toast.remove(toast1)
                            toast.error("TError creating ticket")
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

                              <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#222222] text-white w-full"
                              >
                                {isSubmitting ? "Creating tickets..." : "Create ticket"}
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
                {address === organizer ? <DialogTrigger className="p-3 bg-[#ffffff]/70 pt-4 text-black font-black w-[200px] h-[50px] hover:text-white">Cancel Event
                </DialogTrigger> : ''}
                <DialogContent className="flex justify-center items-center">
                  <DialogHeader>
                    <DialogTitle>Are you sure you want to cancel this event? </DialogTitle>
                    <DialogDescription>
                      <Formik
                        initialValues={{
                          organizer: address,
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                          setSubmitting(true);
                          const toast1 = toast.loading('Cancelling events')
                          const formData = new FormData();
                          formData.append("organizer", values.organizer);
                          try {
                            const signer = await provider.getSigner();
                            const signature = await signer.signMessage(JSON.stringify(values))
                            const response = await axiosInstance.patch(`/events/${eventId}/cancel-event`, formData);
                            toast.remove(toast1)
                            toast.success("Event Cancelled")
                            console.log(response.data.data)
                            console.log(values)
                            console.log(formData);
                          } catch (error) {
                            toast.remove(toast1)
                            toast.error("Error cancelling events")
                            console.log(error);
                          }
                        }}
                      >
                        {({ handleSubmit, isSubmitting }) => (
                          <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                              <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#222222] text-white w-full"
                              >
                                {isSubmitting ? "Cancelling Events..." : "Cancel Event"}
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
                {address === organizer ? <DialogTrigger className="p-3 bg-[#ffffff]/70 text-black font-black pt-4 w-[200px] h-[50px] hover:text-white">Mint POAP</DialogTrigger> : ''}
                {(() => {
                  {
                    switch (formStep) {
                      case 0:
                        // Render step 0 content
                        return <DialogContent className="flex justify-center items-center">
                          <DialogHeader>
                            <DialogTitle>Claim POAP</DialogTitle>
                            {<DialogDescription>
                              <Formik
                                initialValues={{
                                  email: "",
                                  ticketId: 1,
                                }}
                                onSubmit={async (values, { setSubmitting }) => {
                                  setSubmitting(true);
                                  const formData = new FormData();
                                  formData.append("email", values.email);
                                  formData.append("ticketId", values.ticketId);
                                  const toast1 = toast.loading("minting POAP")
                                  try {
                                    const signer = await provider.getSigner();
                                    const signature = await signer.signMessage(JSON.stringify(values))
                                    const response = await axiosInstance.post(`/events/${eventId}/cliam`, formData);
                                    toast.remove(toast1)
                                    const toast2 =toast.success("secret code sent to your mail")
                                    if (toast2){
                                      setFormStep(1)
                                      setEmail(values.email)
                                    }
                                    console.log(response.data.data)
                                    console.log(values)
                                    console.log(formData);
                                  } catch (error) {
                                    toast.remove(toast1)
                                    toast.error("You have not purchased a ticket")
                                    console.log(error);
                                  }
                                }}
                              >
                                {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                  <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                      <Label htmlFor="links" className="text-[#222222]">
                                        User email
                                      </Label>
                                      <Field
                                        as="input"
                                        className="w-full font-mono mb-6 p-2 border"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter user's email"
                                        value={values.email}
                                      />
                                      <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-[#222222] text-white w-full"
                                      >
                                        {isSubmitting ? "Submitting email... " : "Submit"}
                                      </Button>
                                    </div>
                                  </form>
                                )}
                              </Formik>
                            </DialogDescription>}
                          </DialogHeader>
                        </DialogContent>
                          ;
                      case 1:
                        // Render step 1 content
                        return <DialogContent className="flex justify-center items-center">
                          <DialogHeader>
                            <DialogTitle>Claim POAP</DialogTitle>
                            {qrLink === "" ? <DialogDescription>
                              <Formik
                                initialValues={{
                                  email: email,
                                  secretCode: "",
                                }}
                                onSubmit={async (values, { setSubmitting }) => {
                                  setSubmitting(true);
                                  const formData = new FormData();
                                  formData.append("email", values.email);
                                  formData.append("secretCode", values.secretCode);
                                  const toast1 = toast.loading("Veryfying your mail")
                                  try {
                                    const signer = await provider.getSigner();
                                    const signature = await signer.signMessage(JSON.stringify(values))
                                    const response = await axiosInstance.post(`/events/${eventId}/verify-cliam`, formData);
                                    setQrLink(response.data.data)
                                    toast.remove(toast1)
                                    const toast2 = toast.success("Email Verified")
                                    if(toast2){
                                      setFormStep(2)
                                    }
                                    console.log(response.data.data)
                                    console.log(values)
                                    console.log(formData);
                                  } catch (error) {
                                    toast.remove(toast1)
                                    toast.error("Email couldn't be verified")
                                    console.log(error);
                                  }
                                }}
                              >
                                {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                  <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                      <Label htmlFor="links" className="text-[#222222]">
                                        Secret Code
                                      </Label>
                                      <Field
                                        as="input"
                                        className="w-full font-mono mb-6 p-2 border"
                                        name="secretCode"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter user's secretCode"
                                        value={values.secretCode}
                                      />
                                      <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-[#222222] text-white w-full"
                                      >
                                        {isSubmitting ? "Verifying email... " : "Verify"}
                                      </Button>
                                    </div>
                                  </form>
                                )}
                              </Formik>
                            </DialogDescription>: <QRCode bgColor="white" fgColor="black" value={qrLink}/>}
                          </DialogHeader>
                        </DialogContent>
                          ;
                      default:
                        // Render default content or error message
                        return <DialogContent className="flex justify-center items-center">
                          <DialogHeader>
                            <DialogTitle>Claim POAP</DialogTitle>
                            {<DialogDescription>
                              <Formik
                                initialValues={{
                                  email: "",
                                  ticketId: 1,
                                }}
                                onSubmit={async (values, { setSubmitting }) => {
                                  setSubmitting(true);
                                  const formData = new FormData();
                                  formData.append("email", values.email);
                                  formData.append("ticketId", values.ticketId);
                                  const toast1 = toast.loading("minting POAP")
                                  try {
                                    const signer = await provider.getSigner();
                                    const signature = await signer.signMessage(JSON.stringify(values))
                                    const response = await axiosInstance.post(`/events/${eventId}/cliam`, formData);
                                    setQrLink(response.data.data)
                                    toast.remove(toast1)
                                    toast.success("secret code sent to your mail")
                                    console.log(response.data.data)
                                    console.log(values)
                                    console.log(formData);
                                  } catch (error) {
                                    toast.remove(toast1)
                                    toast.error("You have not purchased a ticket")
                                    console.log(error);
                                  }
                                }}
                              >
                                {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                  <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                      <Label htmlFor="links" className="text-[#222222]">
                                        User email
                                      </Label>
                                      <Field
                                        as="input"
                                        className="w-full font-mono mb-6 p-2 border"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter user's email"
                                        value={values.email}
                                      />
                                      <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-[#222222] text-white w-full"
                                      >
                                        {isSubmitting ? "Submitting email... " : "Submit"}
                                      </Button>
                                    </div>
                                  </form>
                                )}
                              </Formik>
                            </DialogDescription>}
                          </DialogHeader>
                        </DialogContent>;
                    }


                  }
                })()}

              </Dialog>
              <Dialog>
                {address !== organizer ? <DialogTrigger className="p-3 bg-[#ffffff]/70 pt-4 text-black font-black w-[200px] h-[50px] hover:text-white">Buy Ticket
                </DialogTrigger> : ''}
                <DialogContent className="flex justify-center items-center">
                  <DialogHeader>
                    <DialogTitle>Choose your preferred ticket</DialogTitle>
                    <DialogDescription>
                      <Formik
                        initialValues={{
                          address: address,
                          eventId: 1,
                          ticketId: 1,
                          quantity: 1
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                          setSubmitting(true);
                          const toast1 = toast.loading('Buying Ticket')
                          const formData = new FormData();
                          formData.append("address", values.address);
                          // formData.append("eventId", values.eventId);
                          formData.append("ticketId", values.ticketId);
                          formData.append("quantity", values.quantity)
                          try {
                            const signer = await provider.getSigner();
                            const signature = await signer.signMessage(JSON.stringify(values))
                            const response = await axiosInstance.post(`/events/${eventId}/purchase-ticket`, formData);
                            toast.remove(toast1)
                            toast.success("Ticket Bought Successfully")
                            console.log(response.data.data)
                            console.log(values)
                            console.log(formData);
                          } catch (error) {
                            toast.remove(toast1)
                            toast.error("error buying ticket")
                            console.log(error);
                          }
                        }}
                      >
                        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                          <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
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
                                {isSubmitting ? "Buying Ticket" : "Buy Ticket"}
                              </Button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="">
              {/* <div className="flex gap-2 items-center mb-6">
                <EventAttendees attendees={attendees} />
                <p className="text-[#fff]">Attendees</p>
              </div> */}
              <h1 className="font-extrabold text-[#fff] w-full text-xl mdl:text-5xl mb-6">{eventName}</h1>
              <p className="text-[#fff] text-sm">Host by: {organizer}</p>
              <div className="flex items-center">
                <div className="rounded-full">
                  <ProfileCircle className="text-white w-[32px] mdl:w-[64px]" />
                </div>
                <h1 className="text-lg mdl:text-xl ml-2 mt-3 text-[#fff] mdl:font-bold">{organizer}</h1>
              </div>
              <div className="flex items-center">
                <Location className="text-white w-[32px] mdl:w-[64px]" />
                <div className="ml-2 mt-3 text-[#fff] mdl:font-bold text-lg mdl:text-xl">
                  {eventAddress}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden mdl:flex w-2/5 justify-center">
            <RegisterationCard setShowPopup={setShowPopup} id={eventId} edit={edit} timestamp={startTime} className="mt-20 mdl:mt-10 hidden mdl:inline" />
          </div>
        </div>
      </div>
      {showPopup && (() => {
        // eslint-disable-next-line 
        switch (type) {
          case "free":
            return <SuccessfulBooking setShowPopup={setShowPopup} ref={ref} />;
          case "paid":
            return <Payment setShowPopup={setShowPopup} ref={ref} organizer={organizer} />;
          case "private":
            return <Request setShowPopup={setShowPopup} ref={ref} />;
        }
      })()}
    </>
  );
};

export default EachEventBanner;
