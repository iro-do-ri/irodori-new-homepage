import Link from "next/link";
import { URL, LINE_URL } from "../url/Url";
import styles from "./FloatingButtons.module.scss";

export default function FloatingButtons() {
  return (
    <div className={styles.wrap}>
      {LINE_URL && (
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.line}
          aria-label="LINEで相談する"
        >
          <span className={styles.lineText}>LINE</span>
        </a>
      )}
      <a href="tel:08055435943" className={styles.phone} aria-label="電話する">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.02l-2.2 2.19z"/>
        </svg>
      </a>
      <Link href={URL.Contact} className={styles.mail} aria-label="お問い合わせ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </Link>
    </div>
  );
}
