import { Revenue,Job, JobGrouping} from './definitions';

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const extractMonthAsString = (dateString: string): string => {
    const date = new Date(dateString);
    return String(date.getMonth() + 1).padStart(2, '0'); // Zero-pad the month
  };

export const generateYJobAxis = (jobs: Job[], filterLocation: string, specificTitle: string): JobGrouping => {
    const groupedJobs: JobGrouping = {};
    console.log(jobs.length + ' jobs count');
    jobs.forEach((job) => {
        // Check if the job's location matches the filterLocation and title matches specificTitle before proceeding
        if (job.location.toLowerCase().includes(filterLocation.toLowerCase()) && job.title.toLowerCase().includes(specificTitle.toLowerCase())) {
          
            const postedDate = new Date(job.posteddate);
            //console.log(job.companyUrl + '   wow ' + job.company);
            //console.log('json stringify' + JSON.stringify(job, null, 2));
            // Format the date as "YYYY-MM" to group by month and year
            const formattedDate = `${postedDate.getFullYear()}-${String(postedDate.getMonth() + 1).padStart(2, '0')}`;
            //const formattedDate = postedDate.getMonth() + 1; + ' ' + postedDate.getFullYear();
            if (!groupedJobs[formattedDate]) {
                groupedJobs[formattedDate] = {};
            }

            // Since we're filtering by specificTitle, we know all increments are for this title
            groupedJobs[formattedDate][specificTitle] = (groupedJobs[formattedDate][specificTitle] || 0) + 1;
        }
    });

    return groupedJobs;
};

export const generateJobCountByMonth = (jobs: Job[]): { [key: string]: number } => {
    const jobCountByMonth: { [key: string]: number } = {};
  
    jobs.forEach((job) => {
      const formattedDate = `${new Date(job.posteddate).getFullYear()}-${String(new Date(job.posteddate).getMonth() + 1).padStart(2, '0')}`;
  
      if (!jobCountByMonth[formattedDate]) {
        jobCountByMonth[formattedDate] = 0;
      }
  
      jobCountByMonth[formattedDate]++;
    });
    
    return jobCountByMonth;
  };
  


export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};


export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
