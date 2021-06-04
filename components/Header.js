import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
  const router = useRouter();
  const searchRef = useRef(null);

  const searchGoogle = (e) => {
    e.preventDefault();
    const term = searchRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer "
          onClick={() => router.push('/')}
        />
        <form className="flex flex-grow border px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchRef.current.value = '')}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={searchGoogle}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://media-exp1.licdn.com/dms/image/C5603AQHAefh8BpMHTg/profile-displayphoto-shrink_400_400/0/1615776794797?e=1628121600&v=beta&t=uGeRAMJChoIIaegA-g7uj07Tdmg68wlLJA4nxDwtZbQ"
        />
      </div>
      {/** Header Options */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
