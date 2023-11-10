import React from "react";

export default function Responsive() {
  return (
    <div>
      <div className="flex justify-end">
        <div className="bg-red-500 w-[30vw] h-[10vh] mobile:mr-5 tablet:w-[100vw] tablet:mx-5 flex justify-center items-center text-3xl">Merah</div>
      </div>

      <div className="m-5 h-[85vh] flex mobile:flex-col tablet:flex-col web:flex">
        <div className="flex w-full h-full mobile:flex-col tablet:flex-col-reverse web:flex-row">
          <div className="mb-3 mobile:h-[50%] tablet:h-[50%] web:h-[100%] web:w-[50%]">
            <div className="bg-purple-500 h-full m-2 flex justify-center items-center text-3xl">ungu</div>
          </div>

          <div className="h-[100%] w-full mr-3 flex mobile:flex-col-reverse tablet:flex-col web:flex-col">
            <div className="bg-green-500 h-[50%] w-full m-2 flex justify-center items-center text-3xl">hijau</div>

            <div className="h-[50%] flex mb-3 mobile:flex mobile:flex-row-reverse tablet:flex-row web:flex-row">
              <div className="bg-blue-600 h-full w-[50%] m-2 flex justify-center items-center text-3xl">biru</div>
              <div className="bg-pink-500 h-full w-[50%] m-2 flex justify-center items-center text-3xl">pink</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
