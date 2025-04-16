import React, { useEffect, useRef, useState } from "react";

const OtpCount = 5;

function Otp() {
  const [inputArr, setInputArr] = useState(new Array(OtpCount).fill(""));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    const newValue = value.trim()
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);

    newValue && refArr.current[index+1]?.focus();
  };

  const handleOnKeyDown = (e,index)=>{
    // console.log(e)
    if(e.key === "Backspace" && inputArr[index] === ""){
        refArr.current[index - 1]?.focus();
    }
  }


  return (
    <div className="bg-[#000a09]  w-screen h-screen">
      <div className="flex justify-center ">
        <div className="w-[400px] h-[250px] bg-[#fff] mt-[130px] drop-shadow-lg rounded">
          <span className="flex justify-center items-center mt-[30px] font-bold text-lg">
            {" "}
            Validate OTP
          </span>
          <div className="flex justify-center items-center mt-[40px]">
            {inputArr.map((input, index) => {
              return (
                <input
                  className="border-2 w-[40px] h-[40px] text-center mr-0.5 text-black rounded"
                  key={index}
                  //   placeholder="0"
                  type="text"
                  ref={(input) => (refArr.current[index] = input)}
                  value={inputArr[index] ?? ""}
                  onChange={(e) => handleOnChange(e.target.value, index)}
                  onKeyDown={(e) => handleOnKeyDown(e,index)}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center mt-[25px]">
          <button className="rounded-lg px-10 border-4 bg-green-500 text-white py-3 font-bold cursor-pointer">Verify</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
