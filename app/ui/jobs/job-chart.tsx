import { generateJobCountByMonth } from '@/app/lib/utils'; // Adjust with your actual function import
import { fetchJobs , fetchFilteredJobs} from '@/app/lib/data';
import Search from '@/app/ui/jobs/search';
import SearchCountry from './searchCountry';

export default async function JobChart({ // Remove props
    query,
  }: {
    query: string;
  }) {
    const jobs = await fetchFilteredJobs(query);
    console.log(jobs);
  //const jobs = await fetchJobs();
  const chartHeight = 300; // Assuming a taller chart for vertical layout
  const barSpacing = 20; // Adjust as needed for desired spacing

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
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search jobs..." />
                {/* <SearchCountry placeholder='Search country...' /> */}
            </div>
      <h2 className="text-xl md:text-2xl mb-4">Job Distribution Over Time</h2>

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="flex items-end">
          {sortedMonths.map(([month, count]) => (
            <div key={month} className="flex flex-col items-center gap-4" style={{ marginRight: `${barSpacing}px` }}>
              <p className="text-xs text-gray-400">{count}</p>
              <div style={{ height: `${(chartHeight / maxJobCount) * count}px`, width: '20px', background: 'blue' }}></div>
              <p className="text-xs text-gray-400">{month}</p>
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