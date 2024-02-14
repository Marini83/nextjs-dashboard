// // JobsList.tsx
// page.tsx

import { Metadata } from 'next';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import {  fetchJobs } from '@/app/lib/data'; // Adjust import paths as needed
import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Job Listings',
};


export default async function LatestJobs() { // Remove props
    const jobs = await fetchJobs();
    console.log(jobs);
    return (
            <div className="flex w-full flex-col md:col-span-4">
              <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Job Search Results 
              </h2>
              <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                <div className="bg-white px-6">
                  {jobs.map((job, index) => (
                    <div
                      key={index}
                      className={`flex flex-row items-center justify-between py-4 ${index !==  0 ? 'border-t' : ''}`}
                    >
                      <div className="flex items-center">
                        <img
                          src={job.img}
                          alt={`${job.company}'s logo`}
                          className="mr-4 rounded-full"
                          width={32}
                          height={32}
                        />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold md:text-base">
                            {job.title}
                          </p>
                          <p className="hidden text-sm text-gray-500 sm:block">
                            {job.company}
                          </p>
                        </div>
                      </div>
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${lusitana.className} truncate text-sm font-medium md:text-base text-blue-500 hover:underline`}
                      >
                        View Details
                      </a>
                    </div>
                  ))}
                </div>
                <div className="flex items-center pb-2 pt-6">
                  <ArrowPathIcon className="h-5 w-5 text-gray-500" />
                  <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
                </div>
              </div>
            </div>
          );
        }

// import { Job } from '@/app/lib/definitions'; // Adjust the import path as needed

// interface JobsListProps {
//   jobs: Job[];
// }

// const JobsList: React.FC<JobsListProps> = ({ jobs }) => {
//   return (
//     <div>
//       {jobs.map((job) => (
//         <div key={job.id}>
//           <h2>{job.title}</h2>
//           <p>{job.company}</p>
//           {/* Additional job details here */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JobsList;
