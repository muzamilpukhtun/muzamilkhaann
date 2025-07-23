// import React from 'react';
// import { motion } from 'framer-motion';

// const Skills = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
//     >
//       <div className="w-full lgl:w-1/2">
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px] uppercase">
//             Professional Skills
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold">DevOps Skills</h2>
//         </div>
//         <div className="flex flex-col gap-6">
//           {/* Docker */}
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Docker</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>

//           {/* Kubernetes */}
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Kubernetes</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">93%</span>
//               </motion.span>
//             </span>
//           </div>

//           {/* Git */}
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Git</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">95%</span>
//               </motion.span>
//             </span>
//           </div>

//           {/* Ansible */}
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Ansible</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">95%</span>
//               </motion.span>
//             </span>
//           </div>

//           {/* Terraform */}
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Terraform</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>

//           {/* Jenkins */}
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Jenkins</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">100%</span>
//               </motion.span>
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="w-full lgl:w-1/2">
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px] uppercase">
//             Additional Skills
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
//         </div>
//         <div className="flex flex-col gap-6">
//           {/* AWS */}
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">AWS</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">95%</span>
//               </motion.span>
//             </span>
//           </div>

//           {/* Azure */}
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Azure</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>

//           {/* Oracle Cloud */}
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Oracle Cloud</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>

//           {/* VPN */}
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">VPN</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>

//           {/* Automation and Scripting */}
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Automation and Scripting</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>
//           {/* Windows Server */}
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Windows Sever</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>

//           {/* GitHub Action */}
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">GitHub Action</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Skills;

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Web Development Skills */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Professional Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Web Development</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { label: 'React.js', percent: 95 },
            { label: 'Next.js', percent: 90 },
            { label: 'Node.js', percent: 90 },
            { label: 'Express.js', percent: 90 },
            { label: 'MongoDB', percent: 85 },
            { label: '.NET / C#', percent: 85 },
            { label: 'MySQL', percent: 85 },
            { label: 'PostgreSQL', percent: 80 },
            { label: 'Prisma ORM', percent: 85 },
            { label: 'REST API Development', percent: 90 },
            { label: 'GraphQL', percent: 80 },
            { label: 'HTML, CSS, Tailwind', percent: 95 },
            { label: 'Responsive Design', percent: 95 },
          ].map((skill, index) => (
            <div key={index} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skill.label}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: `${skill.percent}%` }}
                >
                  <span className="absolute -top-7 right-0">{skill.percent}%</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Integration Skills */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Tools & Integrations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { label: 'JavaScript / TypeScript', percent: 90 },
            { label: 'Git & GitHub', percent: 95 },
            { label: 'Firebase', percent: 80 },
            { label: 'Supabase', percent: 85 },
            { label: 'Redis', percent: 85 },
            { label: 'BullMQ & Workers', percent: 80 },
            { label: 'Vercel', percent: 95 },
            { label: 'V0.dev', percent: 80 },
            { label: 'Spline', percent: 75 },
            { label: 'AI Integrations (OpenAI, etc.)', percent: 85 },
            { label: 'Wallet Integrations (Web3, Solana Devnet)', percent: 75 },
            { label: 'OCR Tools (Tesseract, etc.)', percent: 85 },
            { label: 'AWS', percent: 80 },
            { label: 'WordPress Development', percent: 90 },
            { label: 'Elementor & WooCommerce', percent: 85 },
            { label: 'Plugin Development (WordPress)', percent: 80 },
            { label: 'Problem Solving & Debugging', percent: 98 },
          ].map((skill, index) => (
            <div key={index} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skill.label}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: `${skill.percent}%` }}
                >
                  <span className="absolute -top-7 right-0">{skill.percent}%</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
