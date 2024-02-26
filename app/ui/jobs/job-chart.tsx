import { generateJobCountByMonth } from '@/app/lib/utils'; // Replace with your function name
import { Job } from '@/app/lib/definitions';
import { fetchJobs } from '@/app/lib/data';

export default async function JobChart() { // Make component async, remove the props
  const jobs = await fetchJobs(); // Fetch data inside the component
  const chartHeight = 350;

  const jobCountByMonth = generateJobCountByMonth(jobs); // Call your function

  if (!jobs || jobs.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className="text-xl md:text-2xl mb-4">Job Distribution Over Time</h2>

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {Object.keys(jobCountByMonth).map((month) => (
              <p key={month}>{month}</p>
            ))}
          </div>

          {Object.entries(jobCountByMonth).map(([month, count]) => (
            <div key={month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / Math.max(...Object.values(jobCountByMonth))) * count}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          {/* Calendar icon can be kept here, if desired */}
          <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}
