import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

//Link 사용할때 a랑 같이 못 쓰는지 확인하기 

export default function Header() {
  return(
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Main Page</span>
          </Link>
          
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          
          <Link href="/" className="mr-5 hover:text-gray-900">
              홈
            </Link>

            <Link href="/projects" className="mr-5 hover:text-gray-900">
              프로젝트
            </Link>

            <Link href="/오픈채팅카톡" classNclassName="mr-5 hover:text-gray-900">
              연락하기
            </Link>

          </nav>
          {/*다크모드 버튼자리*/}
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}