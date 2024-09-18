// import Image from "next/image";

import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md"

export default function Footer() {
  return (
    <footer className="border border-b-0 border-r-0 border-l-0 border-gray-300 bg-gray-900 py-4  text-gray-400 flex justify-between items-center flex-col">
      <h1 className="text-xl pb-2 pt-1 ">
        <u>Get in Touch</u>
      </h1>
      <div className="flex items-center justify-center space-x-3 text-xl">
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/kiwiprotocol"
            className="object-cover ml-3 rounded-md "
          >
            <FaGithub />

            {/* <Image src="/linkedin.svg" alt="github" width={28} height={28} /> */}
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/kiwi-protocol"
            className="object-cover ml-3 rounded-md "
          >
            <FaLinkedinIn />

            {/* <Image src="/linkedin.svg" alt="github" width={28} height={28} /> */}
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href={
              "https://x.com/crosslend_"
            }
            className="object-cover ml-3 rounded-md "
          >
            <FaTwitter />
            {/* <Image src="/twitter.svg" alt="twitter" width={28} height={28} /> */}
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href={"mailto:kiwiprotocol@gmail.com"}
            className="object-cover ml-3 rounded-md "
          >
            <MdOutlineEmail />
            {/* <Image src="/email.png" alt="email" width={28} height={28} /> */}
          </a>
        </div>
      </div>
      <p className="mt-4 text-sm">© 2023 Developed by Kiwi Protocol</p>
    </footer>
  );
}
