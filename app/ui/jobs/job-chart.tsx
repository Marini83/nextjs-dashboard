import { generateJobCountByMonth } from '@/app/lib/utils'; // Adjust with your actual function import
import { fetchJobs } from '@/app/lib/data';

export default async function JobChart() {
  const jobs = await fetchJobs();
  const chartWidth = 700; // Assuming a wider chart for horizontal layout

  const jobCountByMonth = generateJobCountByMonth(jobs);

  if (!jobs || jobs.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  // Assuming jobCountByMonth is an object where keys are months and values are job counts
  const maxJobCount = Math.max(...Object.values(jobCountByMonth));

  // Reorder months from earliest to latest
  const sortedMonths = Object.entries(jobCountByMonth).sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime());

  return (
    <div className="w-full md:col-span-4">
      <h2 className="text-xl md:text-2xl mb-4">Job Distribution Over Time</h2>

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="flex flex-col">
          {sortedMonths.map(([month, count]) => (
            <div key={month} className="flex items-center gap-4">
              <p className="text-sm text-gray-400 w-20">{month}</p>
              <div
                className="h-8 bg-blue-300"
                style={{ width: `${(chartWidth / maxJobCount) * count}px` }}
              ></div>
              <p className="text-sm text-gray-400">{count}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center pt-6">
          <h3 className="ml-2 text-sm text-gray-500">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}