"use client"; // if using app directory with client-side interactivity

import React from "react";
import styles from "./BlogEOF.module.css";

const BlogEOF: React.FC = () => {
  return (
    <div className={styles.blogEof}>
      <span>✦ End of Article ✦</span>
    </div>
  );
};

export default BlogEOF;
