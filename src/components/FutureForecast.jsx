export default function FutureForecast({futureForecast}) {
  // console.log(futureForecast)
    return (
      <section className="relative z-30 mt-10 md:w-[30%] md:mt-0">
        <h4 className="font-medium mb-4">Future Forecast</h4>
  
        <div className="space-y-5 mb-32 md:mb-0">
  
          <div className="flex justify-between">
            <p className="text-[#B5B5B5]">Friday</p>
            <div className="flex gap-x-2">
                <p className="font-medium">Patchy rain possible</p>
                <img src="/assets/icons/rain.svg" alt="weather condition" />
            </div>
            
          </div>
  
          <div className="flex justify-between">
            <p className="text-[#B5B5B5]">Saturday</p>
            <div className="flex gap-x-2">
                <p className="font-medium">Patchy rain possible</p>
                <img src="/assets/icons/rain.svg" alt="weather condition" />
            </div>
          </div>
  
          <div className="flex justify-between">
            <p className="text-[#B5B5B5]">Sunday</p>
            <div className="flex gap-x-2">
                <p className="font-medium">Patchy rain possible</p>
                <img src="/assets/icons/rain.svg" alt="weather condition" />
            </div>
          </div>
  
          <div className="flex justify-between">
            <p className="text-[#B5B5B5]">Monday</p>
            <div className="flex gap-x-2">
                <p className="font-medium">Patchy rain possible</p>
                <img src="/assets/icons/rain.svg" alt="weather condition" />
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  