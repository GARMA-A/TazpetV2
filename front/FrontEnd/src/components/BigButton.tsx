type propsForBigButton = { text?: string, width?:number , height?:number };


function BigButton({ text ,width , height}: propsForBigButton) {
       return (
  <button
       className={`m-4 p-1 font-bold bg-black text-gray-300 rounded-md cursor-pointer transition-transform duration-150 active:scale-95`}
       style={{
        width: width ? `${width}px` : "128px", // Default: 128px (w-32)
        height: height ? `${height}px` : "64px", // Default: 64px (h-16)
      }} >
      {text || "No message"}
    </button>
       )
}

export default BigButton
