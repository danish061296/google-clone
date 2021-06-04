import { useRouter } from 'next/router';
import Link from 'next/link';
import ChevronLeftIcon from '@heroicons/react/solid/ChevronLeftIcon';
import ChevronRightIcon from '@heroicons/react/solid/ChevronRightIcon';

function PaginationButtons() {
  const router = useRouter();
  const firstPageIndex = Number(router.query.start) || 0;

  return (
    <div className="flex justify-between max-w-lg text-blue-800 mb-10">
      {firstPageIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${
            firstPageIndex - 10
          }`}
        >
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link
        href={`/search?term=${router.query.term}&start=${firstPageIndex + 10}`}
      >
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
