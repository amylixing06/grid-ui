"use client";

import Logo from "@/public/img/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { MdSwapHoriz } from "react-icons/md";
// import About from "../SideBar/About/About";
// import Modal, { Content, OpenBtn } from "../UI/Modal/Modal";
import ShinyText from "../UI/ShinyText/ShinyText";
import styles from "./Header.module.scss";

function Header() {
   const pathname = usePathname();

   return (
      <div className={styles.header}>
         <a href="/" className={styles.link}>
            <h1 className={styles.logo}>
               <Logo className={styles.logo_svg} />
               Flexbox Labs
            </h1>
         </a>
         
         {pathname !== "/grid" && (
            <Link href="/grid" className={styles.grid_link}>
               <MdSwapHoriz />
               网格
            </Link>
         )}

         {pathname === "/grid" && (
            <Link href="/flexbox" className={styles.grid_link}>
               <MdSwapHoriz />
               弹性盒
            </Link>
         )}

         <a
            href="https://github.com/prazzon/flexbox-labs"
            className={styles.star_btn}
            target="_blank"
         >
            <span className={styles.hover_effect}></span>
            <div className={styles.icon_text}>
               <FaGithub />
               <ShinyText text="Star on GitHub" className={styles.label} />
            </div>
         </a>
      </div>
   );
}

export default Header;
