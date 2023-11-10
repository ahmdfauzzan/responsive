import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hapusBedak } from "../../Redux/action/editdataRedux";

export const ViewRedux = () => {
  const Data = useSelector((state) => state.KotakMakeUp);

  const handlekurangBedak = (bedak) => {
    dispatch(hapusBedak(bedak));
  };

  const dispatch = useDispatch();

  return (
    <div className="flex">
      <div className="text-white font-semibold w-full flex flex-col items-center">
        <h1 className="text-3xl my-[1rem] font-bold">Toko Make Up FEJS-2</h1>
        <div className="flex flex-col w-full ml-[1rem]">
          <h1 className="text-lg">Jumlah Make Up : {Data.jumlahmakeup}</h1>
          <h1 className="text-lg">Nama Brand : {Data.namaBrand}</h1>
          <h1 className="text-lg">Penerbit : {Data.Penerbit}</h1>
          <h1 className="text-lg">List Bedak : </h1>
          {Data.listBedak.map((bedak, index) => (
            <div className="mt-[.3rem] grid gap-4 grid-cols-2" key={index}>
              <span>{bedak}</span>
              <button
                className="bg-rose-400 rounded w-[5rem] ml-[5.6rem]"
                onClick={() => {
                  handlekurangBedak(bedak);
                }}
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
