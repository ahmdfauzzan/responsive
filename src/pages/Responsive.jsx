import React from "react";

export default function Responsive() {
  return (
    <div>
      <div className="flex justify-end">
        <div className="bg-red-500 mr-7 w-[30vw] h-[10vh] mobile:mr-7 tablet:w-[100vw] tablet:mx-7 web:mx-5 flex justify-center items-center text-3xl">Merah</div>
      </div>

      <div className="m-5 h-[85vh] flex flex-col mobile:flex-col tablet:flex-col web:flex">
        <div className="flex w-full h-full flex-col mobile:flex-col tablet:flex-col-reverse web:flex-row">
          <div className="h-[50%] mobile:h-[50%] tablet:h-[50%] tablet:py-0 web:h-[100%] web:w-[50%] p-2 web:p-0 web:pr-2">
            <div className="bg-purple-500 h-full flex justify-center items-center text-3xl">Ungu</div>
          </div>

          <div className="h-[100%] w-full p-2 flex flex-col-reverse mobile:flex-col-reverse tablet:flex-col tablet:py-0 web:flex-col web:p-0">
            <div className="bg-green-500 h-[50%] w-full flex justify-center items-center text-3xl tablet:">Hijau</div>

            <div className="h-[50%] flex mb-3 flex-row-reverse justify-between tablet:my-5 mobile:flex-row-reverse tablet:flex-row web:flex-row web:mt-5 web:mb-0 web:w-full">
              <div className="bg-blue-600 h-full w-[49%] flex justify-center items-center text-3xl">Biru</div>
              <div className="bg-pink-500 h-full w-[49%] flex justify-center items-center text-3xl">Pink</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
