import Animation from "./animation";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
      <>
      <div>
        <Image src="/public/Viva.png" width={10} height={10} className="mt-5"
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              안녕하세요
              <br className="hidden lg:inline-block"/>오늘도 화이팅
            </h1>

            <p className="mb-8 leading-relaxed">지혜는 곳이 두기 목숨을 크고 속에서 그들은 별과 것이다. 천지는 곳으로 구할 품고 돋고, 예수는 것이다. 원대하고, 귀는 끓는 것은 얼음 피다. 그들의 가는 불어 소금이라 타오르고 이상의 되는 것은 것이다. 때에, 이성은 청춘 거선의 이것이야말로 거친 얼마나 무엇을 못할 쓸쓸하랴? 역사를 구할 불어 광야에서 있다. 원대하고, 것이다.보라, 청춘의 설레는 이상 창공에 소리다.이것은 끓는 유소년에게서 것이다. 만물은 내려온 앞이 얼음 천자만홍이 그들은 쓸쓸하랴? 그와 위하여 못할 현저하게 이것은 피다. 피에 청춘의 부패를 설산에서 피가 튼튼하며, 인간은 실현에 황금시대다. 그들은 풍부하게 무엇을 얼마나 얼마나 부패뿐이다.</p>

            <div className="flex justify-center">
              <Link href="/projects">
                <button className="btn-project">프로젝트 보러가기
                </button>
              </Link>
            </div>

            <div>
              
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
          </div>
      </>
  );
}