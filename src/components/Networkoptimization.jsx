import Image from 'next/image'
import networkop from '../images/network.jpg'

export default function Networkoptimization() {
  return (
    <>
      {/* <h1 className="bg-gradient-blue inline-block text-transparent bg-clip-text">hello world
      </h1> */}
      <div className="grid grid-cols-2 gap-2 lg:flex">
        <div className='w-full mr-auto'>
          <div className="relative ">
            <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight text-slate-900 dark:text-transparent">
              Network Optimization
            </p>
            <p className="mt-2 text-lg  text-slate-800 dark:text-white">
              Supply Chain Simulation-based Network Optimization app focuses on
              enhancing operational efficiency by simulating and optimizing
              logistics, inventory management, and transportation across the
              supply chain network. It aims to provide insights into cost
              reduction, lead-time improvement, and resource utilization by
              modeling various supply chain scenarios. The app uses advanced
              simulation models to predict bottlenecks, test demand
              fluctuations, and analyze the impact of disruptions. Key metrics
              addressed include transportation costs, inventory holding costs,
              service levels, lead times, CO2 emissions, and network capacity
              utilization. By simulating real-world scenarios, the app helps
              businesses achieve data-driven decision-making and cost-effective
              supply chain performance.
            </p>
          </div>
        </div>
        <div className="flex items-center rounded-xl">
          <div className="not-prose flex items-center ">
            <Image
              className="overflow-hidden rounded-lg"
              src={networkop}
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  )
}