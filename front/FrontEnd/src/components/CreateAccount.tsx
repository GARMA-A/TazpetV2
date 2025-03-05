import BigButton from "./BigButton";

function CreateAccount() {
  return (
    <>
      <TextField placeHolder="Enter Your Name" />
      <TextField placeHolder="Password" />
      <TextField placeHolder="Enter Your Name" />
       <BigButton width={350} height={50} text="CREATE ACCOUNT"/>
    </>
  );
}

function TextField({ placeHolder }: { placeHolder?: string }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeHolder}
        className="w-80 p-3 text-gray-400 bg-transparent 
                     border-b-1 border-[#E8E8E8] outline-none
                     focus:border-gray-400 transition-all
                     duration-300 font-bold font-oswald text-md"
      />
    </>
  );
}

export default CreateAccount;
