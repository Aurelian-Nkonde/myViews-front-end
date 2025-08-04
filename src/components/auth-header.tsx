import Link from "next/link";

export default function HeaderComponent() {
  return (
    <div className="bg-black h-full text-white items-center flex font-josefin px-4">
      <div className="w-5xl mx-auto flex items-center justify-between">
        <h1 className="font-josefin text-3xl font-bold border-2 border-e-amber-100 p-3">
          MyViews!
        </h1>
        <div className="flex items-center gap-6">
          <Link href="/" className="font-montserrat text-lg">
            HomePage
          </Link>
          <Link href="/" className="font-montserrat text-lg">
            WhyUs
          </Link>
          <Link href="/" className="font-montserrat text-lg">
            AboutUs
          </Link>
          <Link href="/" className="font-montserrat text-lg">
            Footer
          </Link>
        </div>
      </div>
    </div>
  );
}
