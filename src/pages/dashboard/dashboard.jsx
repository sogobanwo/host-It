import Layout from "../../components/events/Layout/Layout";
import React from "react";

const Dashboard = () => {
  return (
    <Layout>
      <div className='bg-gradient-to-r from-purple-500 to-pink-500 min-h-20"'>
        <h1 className="text-white pt-20 pl-14 text-4xl font-bold">
          WELCOME TO THE HOUSE OF EVENT
        </h1>
        <div className="flex gap-x-5 ml-14 mt-6 pb-6">
          <button className="bg-white py-3 px-8 border rounded-full font-semibold">
            Host an Event
          </button>
          <button className="bg-white py-3 px-3 border rounded-full font-semibold">
            Find your next event
          </button>
        </div>
      </div>

      {/* Second part that consist of All event, hosting and Attending */}
      <div className="flex gap-x-8 px-8 mt-8">
        <div className="w-1/2">
          <div className="flex gap-x-4">
            <button className="bg-white py-2 px-10 border rounded-xl">
              All event
            </button>
            <button className="bg-white py-2 px-8 border rounded-xl">
              Hosting
            </button>
            <button className="bg-white py-2 px-8 border rounded-xl">
              Attending
            </button>
          </div>

          <div className="flex gap-5 mt-5 text-white">
            <div>
              <h1 className="text-white">
                <span>Sep</span> <br /> 23
              </h1>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600"
                width="250px"
                alt="event page"
              />
            </div>
            <div>
              <h1 className="font-bold">Bragtime official App Launching</h1>
              <div>12:00pm</div>
              <div>1 Kent street, Melbourne</div>
            </div>
          </div>

          <div className="flex gap-5 mt-5 text-white">
            <div>
              <h1 className="text-white">
                <span>Sep</span> <br /> 23
              </h1>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600"
                width="250px"
                alt="event page"
              />
            </div>
            <div>
              <h1 className="font-bold">Bragtime official App Launching</h1>
              <div>12:00pm</div>
              <div>1 Kent street, Melbourne</div>
            </div>
          </div>

          <div className="flex gap-5 mt-5 text-white">
            <div>
              <h1 className="text-white">
                <span>Sep</span> <br /> 23
              </h1>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600"
                width="250px"
                alt="event page"
              />
            </div>
            <div>
              <h1 className="font-bold">Bragtime official App Launching</h1>
              <div>12:00pm</div>
              <div>1 Kent street, Melbourne</div>
            </div>
          </div>
        </div>
        <div className="className=w-1/2"></div>
      </div>
    </Layout>
  );
};

export default Dashboard;
