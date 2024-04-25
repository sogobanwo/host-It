import EventLayout from '../../../components/events/Layout/Layout'
import React from 'react'
import { Field, Formik } from 'formik'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker';
import axiosInstance from '../../../helpers/AxiosConfig';

function PickTime({ onChange, value }) {
  return (
    <div>
      <TimePicker onChange={onChange} value={value} />
    </div>
  );
}

function PickDate({ onChange, value }) {

  return (
    <div>
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}

const CreateEvent = () => {
  return (
    <EventLayout>
      <div className="flex flex-col mdl:flex-row justify-between mx-3 my-3">
        <h1 className="font-bold text-2xl mdl:text-4xl text-[#fff]">
          Create your next event
        </h1>
      </div>
      <Formik
        initialValues={{ name: "", description: "", eventCategory: "", virtual_event: false, amount: "", start_date: new Date(), end_date: new Date(), expiry_date: new Date(), start_time: "00:00", end_time: "00:00", city: "", email: "", secret_code: "", image: "" }}

        onSubmit={async(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values)
          try {
            await axiosInstance.post('/events',
            values);
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
          <form onSubmit={handleSubmit} className='flex flex-wrap gap-6'>
            <div className='flex flex-col'>
              <label className="text-white text-2xl font-normal whyte leading-loose ">
                Name
              </label>
              <Field type="text" name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name} placeholder={"input your name"} className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono" />
              {errors.name && touched.name && errors.name}
            </div>

            <div className='flex flex-col'>
              <label className="text-white text-2xl font-normal whyte leading-loose ">
                Email
              </label>
              <Field type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email} placeholder={"input your mail"} className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono" />
              {errors.email && touched.email && errors.email}
            </div>

            <div className='flex flex-col'>
              <label className="text-white text-2xl font-normal whyte leading-loose ">
                Ticket Price
              </label>
              <Field type="number"
                name="amount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.amount} placeholder={"input ticket price"} className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono" />
              {errors.amount && touched.amount && errors.amount}
            </div>
            <div className='flex flex-col'>
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
                className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono"
              />
              {errors.city && touched.city && errors.city}
            </div>
            <div className='flex flex-col'>
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
                className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono"
              />
              {errors.country && touched.country && errors.country}
            </div>
            <div className='flex flex-col'>
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
                className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono"
              />
              {errors.secret_code && touched.secret_code && errors.secret_code}
            </div>
            <div className='flex flex-col'>
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
              />
            </div>
            <div className='flex flex-col'>
              <label className="text-white text-2xl font-normal whyte leading-loose ">
                Category
              </label>
              <Field as="select" name="eventCategory" onChange={handleChange}
                onBlur={handleBlur}
                value={values.eventCategory}
                placeholder={"Describe your event..."} className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono">
                <option value={"free"}>Free</option>
                <option value={"paid"}>Paid</option>
                <option value={"private"}>Private</option>
              </Field>
              {errors.eventCategory && touched.eventCategory && errors.eventCategory}
            </div>
            <div className='flex flex-col'>
              <label className="text-white text-2xl font-normal whyte leading-loose ">
                Type
              </label>
              <Field as="select" name="virtual_event" onChange={handleChange}
                onBlur={handleBlur}
                value={values.virtual_event}
              >              <option value={false} className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono">Physical</option>
                <option value={true}>Virtual_event</option>
              </Field>
              {errors.virtual_event && touched.virtual_event && errors.virtual_event}
            </div>
            <div className='flex flex-col'>
              <label className="text-white text-2xl font-normal whyte leading-loose ">
                Start Time
              </label>
              <Field name="start_time" as={PickTime} onChange={handleChange} onBlur={handleBlur}
                value={values.start_time} className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono" />
            </div>
            <div className='flex flex-col'>
              <label className="text-white text-2xl font-normal whyte leading-loose ">
                End Time
              </label>
              <Field name="end_time" as={PickTime} onChange={handleChange} onBlur={handleBlur}
                value={values.end_time} className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono" />
            </div>
            <div className='flex flex-col'>
              <label className="text-white text-2xl font-normal whyte leading-loose ">
                Start Date
              </label>
              <Field name="start_date" as={PickDate} onChange={handleChange} onBlur={handleBlur}
                value={values.start_date} className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono" />
            </div>
            <div className='flex flex-col'>
              <label className="text-white text-2xl font-normal whyte leading-loose ">
                End Date
              </label>
              <Field name="end_date" as={PickDate} onChange={handleChange} onBlur={handleBlur}
                value={values.end_date} className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono" />
            </div>
            <div className='flex flex-col'>

              <label className="text-white text-2xl font-normal whyte leading-loose ">
                Claim Expiry Date
              </label>
              <Field name="expiry_date" as={PickDate} onChange={handleChange} onBlur={handleBlur}
                value={values.expiry_date} className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono" />
              <div className='flex flex-col'>
              </div>
              <label className="text-white text-2xl font-normal whyte leading-loose ">
                Event Banner
              </label>
              <Field as="input" type="file" name="image" onChange={handleChange} onBlur={handleBlur}
                value={values.image} className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>


    </EventLayout>
  )
}

export default CreateEvent