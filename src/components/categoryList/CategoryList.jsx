import React from 'react'
import Link from "next/link";
import Image from "next/image";
import styles from "./categoryList.module.css";

const CategoryList = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
      <Link href="/blog?cat=style" className={`${styles.category} ${styles.styles}`}>
        <Image
          src='/style.png'
          alt=""
          width={32}
          height={32}
          className={styles.image} />
      </Link>
      <Link href="/blog?cat=style" className={`${styles.category} ${styles.styles}`}>
        <Image
          src='/style.png'
          alt=""
          width={32}
          height={32}
          className={styles.image} />
      </Link>
      
      </div>
    </div>
  );
};

export default CategoryList