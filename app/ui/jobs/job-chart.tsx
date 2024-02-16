import { generateYJobAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { Job,JobGrouping } from '@/app/lib/definitions';
import { fetchJobs } from '@/app/lib/data';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function JobChart() { // Make component async, remove the props
    const job = await fetchJobs(); // Fetch data inside the component
  const chartHeight = 350;
  // NOTE: comment in this code when you get to this point in the course

  const groupedJobs = generateYJobAxis(job,"Albania","Engineer");

  if (!job || job.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Job Distribution Over Time
      </h2>

      <div className="rounded-xl bg-gray-50 p-4">
        {Object.keys(groupedJobs).map((date) => (
          <div key={date} className="mt-4">
            <h3 className="text-lg">{date}</h3>
            <ul>
              {Object.entries(groupedJobs[date]).map(([title, count]) => (
                <li key={title}>{`${title}: ${count} jobs`}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Data for the last 12 months</h3>
        </div>
      </div>
    </div>
  );

}
