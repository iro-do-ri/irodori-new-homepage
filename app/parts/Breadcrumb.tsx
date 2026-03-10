import Link from "next/link";
import styles from "./_Breadcrumb.module.scss";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const all: BreadcrumbItem[] = [{ label: "ホーム", href: "/" }, ...items];

  return (
    <nav aria-label="パンくずリスト" className={styles.nav}>
      <ol className={styles.list}>
        {all.map((item, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={i} className={styles.item}>
              {i > 0 && (
                <span className={styles.sep} aria-hidden="true">›</span>
              )}
              {!isLast && item.href ? (
                <Link href={item.href} className={styles.link}>{item.label}</Link>
              ) : (
                <span className={styles.current} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
