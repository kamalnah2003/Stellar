import CongratulationsCard from "components/Pages/Dashboard/CongratulationsCard";
import Calender from "components/Pages/Dashboard/calender";
import Notifictaion from "components/Pages/Dashboard/Notification";

const StaffDashboard = () => {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-7 lg:grid-rows-[227px_400px_553px]">
        {/* Congratulations Card */}
        <div className="sm:col-start-1 sm:col-end-3 lg:col-start-1 lg:col-end-7">
          <CongratulationsCard />
        </div>
  
        {/* Subscribers Gained Chart */}
        <div  className="sm:col-start-1 text-black font-bold sm:col-end-2 lg:col-start-7 lg:col-end-10">
        <CongratulationsCard />
        </div>
        
   <div className="sm:col-start-1 sm:col-end-3 lg:col-start-1 lg:col-end-5">
        <Notifictaion/>
        </div>
  
        <div className="sm:col-start-1 sm:col-end-3 lg:col-start-5 lg:col-end-9">
        <Notifictaion />
        </div>
  
      
        <div className="sm:col-start-1 sm:col-end-3 lg:col-start-9 lg:col-end-13">
          <Notifictaion />
        </div>
        {/* Avg Sessions Card */}
        <div className="sm:col-start-1 sm:col-end-3 lg:col-start-1 lg:col-end-7">
        <Calender/>
        </div>
  
        {/* Support Tracker Card */}
        <div className="sm:col-start-1 sm:col-end-3 lg:col-start-7 lg:col-end-13">
          {/* <SupportTrackerCard /> */}
          <Calender/>
        </div>
        
      </section>
      
    )
  }
  
  export default StaffDashboard
  