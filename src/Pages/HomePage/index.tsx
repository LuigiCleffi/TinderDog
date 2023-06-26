import apple from "../../assets/apple.svg"
import android from "../../assets/google-play.svg"
import tinderDog from "../../assets/tinderDog.png"

export default function HomePage() {
  return (
    <div className="flex lg:h-96 mt-10 justify-center ">
      <main className="w-3/4 bg-slate-100 rounded-lg flex p-10 lg:blur-0">

        <div className="flex w-full h-full justify-between">
          <div className="title">
            <h1 className="text-2xl font-bold">Seja bem vindo(a) ao Dog Match</h1>
            <p>
              Aqui você encontra o melhor <span className="font-bold">Match</span> para
              a sua companhia
            </p>
            <div className="downloads block lg:flex mt-32 gap-4">
              <div
                className="ios bg-slate-200 w-fit  h-16 flex justify-between items-center p-4 rounded-lg cursor-pointer hover:scale-110 hover:bg-slate-300 duration-500">
                <img src={apple} className="h-4 lg:h-8 mr-3 " />
                <h2>Download do App</h2>
              </div>

              <div
                className="android mt-3 lg:mt-0 bg-slate-200 w-fit h-16 flex justify-between items-center p-4 rounded-lg cursor-pointer hover:scale-110 hover:bg-slate-300 duration-500">
                <img src={android} className="h-4 lg:h-8 mr-3" />
                <h2>Download do App</h2>
              </div>
            </div>

          </div>

          <div>
            <img src={tinderDog} className="h-98 rotate-12 hidden lg:block hover:animate-cell" alt="" />
          </div>
        </div>
      </main>
    </div>
  )
}