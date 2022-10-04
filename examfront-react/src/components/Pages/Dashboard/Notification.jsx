import React from "react"

const Notifictaion = () => {
  return (
    <div className="relative p-5 rounded-md bg-white h-[420px]">
      <span className="text-xs text-[#7367f0] bg-[#7b71e61f] px-2 py-1 rounded-md font-semibold">
        10 Oct, 2022
      </span>
      <h4 className="text-black font-semibold my-4">Data Strutuctre</h4>
      <p className="text-xs text-black mb-5">
      Examine your skills in Data Structure by giving the test. All Data Structure quiz tests are based on multiple-choice questions (MCQs).
      </p>

      <div className="mb-8">
        <h6 className="text-xs uppercase mb-2 text-[#676d7d]">Skills</h6>
        <span className="py-[3px] px-2 mr-3 text-[#ff9f43] bg-[#ff9f431f] rounded-md text-[13px] font-semibold">
          C++
        </span>
        <span className="py-[3px] px-2 mr-3 text-[#7367f0] bg-[#7367f01f] rounded-md text-[13px] font-semibold">
          Python
        </span>
      </div>
      <div className="flex items-center justify-start mb-16">
        <div className="rounded-md px-2 py-1 mr-2 bg-[#7367f0] text-sm w-24 text-[13px] text-center">
          <p className="text-[#b4b7bd]">Start date</p>
          <h6 className="text-[#d0d2d6] font-semibold">12 Apr, 22</h6>
        </div>

        <div className="rounded-md px-2 py-1 mr-2 bg-[#7367f0] text-sm w-24 text-[13px] text-center">
          <p className="text-[#b4b7bd]">End date</p>
          <h6 className="text-[#d0d2d6] font-semibold">16 Apr, 22</h6>
        </div>

        <div className="rounded-md px-2 py-1 mr-2 bg-[#7367f0] text-[13px] w-24 text-center">
          <p className="text-[#b4b7bd]">Total marks</p>
          <h6 className="text-[#d0d2d6] font-semibold">100</h6>
        </div>
      </div>
      <button className="px-5 py-[9px] w-full bg-[#7367f0] text-white font-medium text-sm rounded-md hover:shadow-indigo transition-shadow duration-300">
        Attend Exam 
      </button>
    </div>
  )
}

export default Notifictaion
