import { BriefcaseIcon, CalendarIcon, TrophyIcon, UsersIcon } from 'lucide-react'
import React from 'react'
import { Card } from '../../ui/card'

const AboutDashboard = ({eventHosted, eventAttended, poa, totalEvents}) => {
  return (
    <div className="grid w-[80%] mx-[5%] mdl:mx-[0%] p-4 mdl:w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mdl:m-10 mdl:mb-14">
      <Card className="bg-[#222222]/50 shadow-md rounded-lg p-6 flex flex-col items-start gap-4">
        <div className="flex items-center gap-4">
          <CalendarIcon className="h-8 w-8 text-gray-400" />
          <div className="text-3xl text-gray-400 font-bold pt-4">{eventHosted}</div>
        </div>
        <p className="text-gray-400">Events Hosted</p>
      </Card>
      <Card className="bg-[#222222]/50 shadow-md rounded-lg p-6 flex flex-col items-start gap-4">
        <div className="flex items-center gap-4">
          <UsersIcon className="h-8 w-8 text-gray-400" />
          <div className="text-3xl font-bold text-gray-400 pt-4">{eventAttended}</div>
        </div>
        <p className="text-gray-400">Events Attended</p>
      </Card>
      <Card className="bg-[#222222]/50 shadow-md rounded-lg p-6 flex flex-col items-start gap-4">
        <div className="flex items-center gap-4">
          <TrophyIcon className="h-8 w-8 text-gray-400" />
          <div className="text-3xl font-bold text-gray-400 pt-4">{poa}</div>
        </div>
        <p className="text-gray-400">POAPs Collected</p>
      </Card>
      <Card className="bg-[#222222]/50 shadow-md rounded-lg p-6 flex flex-col items-start gap-4">
        <div className="flex items-center gap-4">
          <BriefcaseIcon className="h-8 w-8 text-gray-400" />
          <div className="text-3xl font-bold text-gray-400 pt-4">{totalEvents}</div>
        </div>
        <p className="text-gray-400">Total Events</p>
      </Card>
    </div>
  )
}

export default AboutDashboard