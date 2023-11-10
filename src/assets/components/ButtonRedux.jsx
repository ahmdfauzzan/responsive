import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gantiBrand, kurangJumlahMakeUp, tambahBedak, tambahJumlahMakeUp } from "../../Redux/action/editdataRedux";

export const ButtonRedux = () => {
  const dispatch = useDispatch();

  const [inputBedak, setinputBedak] = useState("");

  const handletambahBedak = () => {
    if (inputBedak.trim() !== "") {
      dispatch(tambahBedak(inputBedak));
      setinputBedak("");
    }
  };

  return (
    <div className="flex flex-col text-white font-semibold">
      <div className="flex flex-row grid gap-4 grid-cols-2 my-[1rem] mx-[.5rem]">
        <button
          className="bg-rose-400 rounded"
          onClick={() => {
            dispatch(tambahJumlahMakeUp());
          }}
        >
          Tambah Stok
        </button>
        <button
          className="bg-rose-400 rounded"
          onClick={() => {
            dispatch(kurangJumlahMakeUp());
          }}
        >
          Kurangi Stok
        </button>
      </div>
      <input
        className="border-2 rounded-md bg-transparent border-white mb-[1rem] pl-[.5rem] w-2/3 ml-[.5rem]"
        placeholder="Ganti Brand?"
        onChange={(e) => {
          const newBrand = e.target.value;
          if (newBrand.trim() === "") {
            dispatch(
              gantiBrand({
                namaBrand: "Lato-lato",
                Penerbit: "Sari Roti",
              })
            );
          } else {
            dispatch(
              gantiBrand({
                namaBrand: newBrand,
                Penerbit: "Sedang Dicari",
              })
            );
          }
        }}
      ></input>
      <div className="mb-[1rem]">
        <input
          className="border-2 rounded-md bg-transparent border-white w-2/3 pl-[.5rem] ml-[.5rem]"
          placeholder="Tambah Bedak?"
          value={inputBedak}
          onChange={(e) => {
            setinputBedak(e.target.value);
          }}
        ></input>
        <button
          className="bg-rose-400 rounded mx-[.2rem] h-[1.8rem] w-[6.8rem]"
          onClick={handletambahBedak}
        >
          Tambah Bedak
        </button>
      </div>

      
    </div>
  );
};
