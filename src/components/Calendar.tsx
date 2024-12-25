const Calendar = () => {
  const today = new Date();
  const date = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const weekday = today.toLocaleString("default", { weekday: "long" });

  return (
    <div className="bg-white/50 backdrop-blur-md rounded-xl p-4 shadow-2xl poppins font-extralight max-w-[450px]">
      <div className="flex justify-between items-center text-gray-600">
        <span className="text-base sm:text-lg ">{month}</span>
        <span className="text-base sm:text-lg ">{year}</span>
      </div>
      <div className="text-center mt-4">
        <div className="text-6xl sm:text-9xl font-extralight text-gray-800">{date}</div>
        <div className="text-base sm:text-xl font-medium text-gray-600">{weekday}</div>
      </div>
    </div>
  );
};

export default Calendar;
