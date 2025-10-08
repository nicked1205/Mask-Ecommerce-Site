const RecruitmentInfo = () => {
  const jobs = [
    {
      area: "Planning, general affairs, marketing, sales management",
      duty: "General planning, marketing management, sales management",
      place: "Hwaseong (Dongtan), Gyeonggi-do",
      education: "Associate degree or higher",
      remarks: "Computer skills",
    },
    {
      area: "Sales",
      duty: "B2B and B2G sales",
      place: "No limit",
      education: "-",
      remarks: "Sales in public and private sectors",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-4">
        Recruitment Information
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Saving Story invites competent talents who will grow with the company by
        targeting domestic and global markets for personal fire evacuation
        supplies
      </p>

      <p className="text-gray-800 mb-4 font-medium">
        <span className="font-bold">Job Opening:</span> When vacancy or reason
        for personnel increase occurs by area
      </p>

      <div className="overflow-x-auto bg-gray-50 rounded-lg shadow">
        <table className="table-auto border-collapse text-sm md:text-base w-full">
          <thead>
            <tr className="bg-gray-700 text-white text-center">
              <th className="px-4 py-3">Area</th>
              <th className="px-4 py-3">Duty</th>
              <th className="px-4 py-3">Place of Work</th>
              <th className="px-4 py-3">Education</th>
              <th className="px-4 py-3">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, i) => (
              <tr
                key={i}
                className="border-t border-gray-300 even:bg-gray-100"
              >
                <td className="px-4 py-5 align-top">{job.area}</td>
                <td className="px-4 py-5 align-top">{job.duty}</td>
                <td className="px-4 py-5 align-top">{job.place}</td>
                <td className="px-4 py-5 align-top">{job.education}</td>
                <td className="px-4 py-5 align-top">{job.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 font-bold">
        ※ Recruitment Inquiry :{" "}
        <span className="text-red-600">+82-70-4909-7570</span>
      </p>
    </div>
  );
};

export default RecruitmentInfo;
