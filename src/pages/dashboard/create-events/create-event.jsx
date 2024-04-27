import EventLayout from '../../../components/events/Layout/Layout'
import React, { useState } from 'react'
import { Field, Formik } from 'formik'
import axiosInstance from '../../../helpers/AxiosConfig';
import { Button } from '../../../components/ui/button';
import { useRef } from 'react';


const CreateEvent = () => {
const fileRef = useRef(null);
const [preview, setPreview] = useState(null); 

return (

<EventLayout>
<div className="flex flex-col mdl:flex-row justify-between mx-3 my-3">
<h1 className="font-bold text-2xl mdl:text-4xl text-[#fff]">
Create your next event
</h1>
</div>
<Formik
initialValues={
{
name: "",
description: "",
city: "",
country: "",
start_date: new Date(),
end_date: new Date(),
expiry_date: new Date(),
event_url: "https://poap.xyz",
virtual_event: false,
image: "",
email: "",
event_template_id: 1,
private_event: false,
notify_issuer: true,
requested_codes: 10,
start_time: "00:00",
end_time: "00:00",
secret_code: "",
}}

onSubmit={async (values, { setSubmitting }) => {
setSubmitting(true);
console.log(values)
const formData = new FormData();
Object.keys(values).forEach((key) => {
if (key === 'image') {
formData.append(key, values[key]); // Append the image file with filename
} else {
formData.append(key, values[key]); // Append other values
}
});
try {
await axiosInstance.post('/events', formData);
} catch (error) {
console.log(error)
}
}
}
>
{({
values,
errors,
touched,
handleChange,
handleBlur,
handleSubmit,
isSubmitting,
/* and other goodies */
}) => (
<form onSubmit={handleSubmit} className="grid gap-6" encType="multipart/form-data">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-4">

<div className='flex flex-col gap-2'>
<label className="text-white text-2xl font-normal whyte leading-loose ">
Name
</label>
<Field type="text" name="name"
onChange={handleChange}
onBlur={handleBlur}
value={values.name} placeholder={"input your name"} className=" text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border" />
{errors.name && touched.name && errors.name}
</div>

<div className='flex flex-col gap-2'>
<label className="text-white text-2xl font-normal whyte leading-loose ">
Email
</label>
<Field type="email"
name="email"
onChange={handleChange}
onBlur={handleBlur}
value={values.email} placeholder={"input your mail"} className=" text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border" />
{errors.email && touched.email && errors.email}
</div>

{/* <div className='flex flex-col gap-2'>
<label className="text-white text-2xl font-normal whyte leading-loose ">
Ticket Price
</label>
<Field type="number"
name="price"
onChange={handleChange}
onBlur={handleBlur}
value={values.amount} placeholder={"input ticket price"} className=" text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border" />
{errors.amount && touched.amount && errors.amount}
</div> */}
<div className='flex flex-col gap-2'>
<label className="text-white text-2xl font-normal whyte leading-loose ">
City
</label>
<Field
type="text"
name="city"
onChange={handleChange}
onBlur={handleBlur}
value={values.city}
placeholder={"input event city"}
className=" text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"
/>
{errors.city && touched.city && errors.city}
</div>
<div className='flex flex-col gap-2'>
<label className="text-white text-2xl font-normal whyte leading-loose ">
Country
</label>
<Field
type="text"
name="country"
onChange={handleChange}
onBlur={handleBlur}
value={values.country}
placeholder={"input event country"}
className=" text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"
/>
{errors.country && touched.country && errors.country}
</div>
<div className='flex flex-col gap-2'>
<label className="text-white text-2xl font-normal whyte leading-loose ">
Secret Code
</label>
<Field
type="text"
name="secret_code"
onChange={handleChange}
onBlur={handleBlur}
value={values.secret_code}
placeholder={"input secret code"}
className=" text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"
/>
{errors.secret_code && touched.secret_code && errors.secret_code}
</div>
<div className='flex flex-col gap-2'>
<label className="text-white text-2xl font-normal whyte leading-loose ">
Category
</label>
<Field as="select" name="eventCategory" onChange={handleChange}
onBlur={handleBlur}
value={values.eventCategory}
placeholder={"Describe your event..."} className=" text-white rounded-lg h-12 p-4 pr-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border">
<option value={false} >Free</option>
<option value={false} >Paid</option>
<option value={true}>Private</option>
</Field>
{errors.eventCategory && touched.eventCategory && errors.eventCategory}
</div>
<div className='flex flex-col gap-2'>
<label className="text-white text-2xl font-normal whyte leading-loose ">
Type
</label>
<Field as="select" name="virtual_event" onChange={handleChange}
onBlur={handleBlur}
value={values.virtual_event} className=" text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"

> <option value={false} >Physical</option>
<option value={true}>Virtual_event</option>
</Field>
{errors.virtual_event && touched.virtual_event && errors.virtual_event}
</div>
<div className='flex flex-col gap-2'>
<label className="text-white text-2xl font-normal whyte leading-loose ">
Start Time
</label>
<Field name="start_time" type="datetime-local" onChange={handleChange} onBlur={handleBlur}
value={values.start_time} className=" text-white rounded-lg p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"
/>
</div>
<div className='flex flex-col gap-2'>
<label className="text-white text-2xl font-normal whyte leading-loose ">
End Time
</label>
<Field name="end_time" type="datetime-local" onChange={handleChange} onBlur={handleBlur}
value={values.end_time} className=" text-white rounded-lg p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"
/>
</div>
<div className='flex flex-col gap-2'>
<label className="text-white text-2xl font-normal whyte leading-loose ">
Start Date
</label>
<Field name="start_date" type="date" onChange={handleChange} onBlur={handleBlur}
value={values.start_date} className=" text-white rounded-lg p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"
/>
</div>
<div className='flex flex-col gap-2'>
<label className="text-white text-2xl font-normal whyte leading-loose ">
End Date
</label>
<Field name="end_date" type="date" onChange={handleChange} onBlur={handleBlur}
value={values.end_date} className=" text-white rounded-lg p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"
/>
</div>
<div className='flex flex-col gap-2'>

<label className="text-white text-2xl font-normal whyte leading-loose ">
Claim Expiry Date
</label>
<Field name="expiry_date" type="date" onChange={handleChange} onBlur={handleBlur}
value={values.expiry_date} className=" text-white rounded-lg p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"
/>
</div>
</div>
<div className='flex flex-col gap-2 mx-4'>
<label className="text-white text-2xl font-normal whyte leading-loose ">
Description
</label>
<Field
as="textarea"
name="description"
onChange={handleChange}
onBlur={handleBlur}
value={values.description}
placeholder={"Describe your event..."}
className=" text-white rounded-lg min-h-[150px] p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"
/>
</div>
<div className='flex flex-col gap-2 mx-4'>
  <label className="text-white text-2xl font-normal whyte leading-loose ">
    Event Banner
  </label>
  <input 
    type="file" 
    name="image" 
    accept="image/*" 
    ref={fileRef} // Assign the ref to the file input
    onChange={(event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update the image preview
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      // Update Formik values directly
      handleChange({
        target: {
          name: "image",
          value: file,
        },
      });
    }} 
    onBlur={handleBlur}
    className="text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border" 
  />
  {preview && <img src={preview} alt="Preview" className="max-w-full h-auto mt-2" />}
</div>


<Button type="submit" disabled={isSubmitting} className="m-4 lg:w-2/5 rounded-xl bg-white text-black">
{isSubmitting ? "Creating Event..." : "Create Event"}
</Button>
</form>
)}
</Formik>


</EventLayout>
)
}

export default CreateEvent