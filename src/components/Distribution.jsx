import Image from 'next/image'
import truck from "../images/truck.png"
import dis from "../images/displanning.png"





export default function Distribution() {
  return (
    <>
      {/* <h1 className="bg-gradient-blue inline-block text-transparent bg-clip-text">hello world
      </h1> */}
      <div className="grid grid-cols-3 gap-2 lg:flex">
        <div>
          <div className="relative ">
            <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900">
              Distribution Planning
            </p>
            <p className="mt-2 text-lg  text-slate-800 dark:text-white">
              In today increasingly omnichannel environment, profitably
              delivering excellent customer service is becoming more challenging
              and complex.
            </p>
          </div>
        </div>
        <div className="col-span-2 flex items-center rounded-xl">
          <div className="not-prose flex items-center ">
            <Image
              className="rounded-lg"
              src={dis}
              alt=""
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </>
  )
}

// export function CardLink() {
//   return (
//     <div className="not-prose my-12 grid grid-cols-2 gap-6 lg:grid-cols-3">
//       {stats.map((item) => (
//         <div
//           key={item.id}
//           className="group relative rounded-xl border border-slate-200 dark:border-slate-800"
//         >
//           <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
//           <div className="relative overflow-hidden rounded-xl p-6">
//             <item.icon className="h-16 w-16" />
//             <h2 className="font-display text-base text-slate-900 dark:text-white">
//               <Link href={item.href}>
//                 <span className="absolute -inset-px rounded-xl" />
//                 {item.title}
//               </Link>
//             </h2>
//             <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
//               {item.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }
