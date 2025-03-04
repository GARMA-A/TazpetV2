import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center bg-gradient-to-r from-gray-950 to-gray-900">
      <h1 className="text-gray-500 text-4xl font-mono  pt-40">
        <Typewriter
          options={{
            strings: ["WELCOME TO TAZPET🎉"],
            autoStart: true,
            delay: 200, // Typing speed
            deleteSpeed: 100, // Speed of erasing text
          }}
        />
      </h1>
    </div>
  );
}

export default App;
