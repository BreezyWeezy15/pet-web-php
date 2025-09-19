"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col p-5 justify-center">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Image src="/pet.png" alt="pet" width={30} height={30} />
          <h4 className="text-black font-bold text-2xl">PET</h4>
        </div>

        <h4 onClick={ () => router.push("/login")} className="text-black font-bold cursor-pointer">Sign in</h4>
      </div>

      <div className="flex justify-center">
        <h4 className="text-black font-extrabold text-4xl mt-10 justify-center items-center text-center">
          Every Pet Deserves a Loving Home. <br />{" "}
          <span className="text-orange-400">Adopt</span> a Pet Today
        </h4>
      </div>

      <div className="flex justify-center">
        <h4 className="text-gray-600 text-sm text-center justify-center mt-5 font-medium">
          Browse our available animals and learn more about the adoption
          process. Together, we can rescue, <br /> rehabilitate, and rehome pets in
          need. Thank you for supporting our mission to bring joy to families
          through <br /> pet adoption.
        </h4>
      </div>
    </div>
  );
}


/*  


Control panel username:	b7_39980238
Control panel password:	**********
Control panel URL:	cpanel.byethost7.com
MySQL username	b7_39980238
MySQL password:	**********
MySQL hostname:	sql209.byethost7.com
FTP username:	b7_39980238
FTP password:	**********
FTP host name:	ftp.byethost7.com
Your Website URL:	http://petsadoptiondz.byethost7.com
 	 

*/ 