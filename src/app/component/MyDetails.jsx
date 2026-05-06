"use client";

import styles from "./MyDetails.module.css";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

const MyDetails = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  return (
    <aside className={styles.detailsContainer}>
      <p className={styles.cardLabel}>Details</p>

      <ul className={styles.detailsList}>
        <li>Full Stack Software Engineer</li>
        <li>Metro Detroit</li>

        <li>
          <a href="mailto:codiegroth@gmail.com?subject=Hello%20Codie">
            CodieGroth@gmail.com
          </a>
        </li>

        <li>
          <a
            href="https://github.com/codiemaureen"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/codiemaureen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>

        <li>
          {rootElement && (
            <PopupButton
              url="https://calendly.com/codiegroth/30min"
              rootElement={rootElement}
              text="Schedule a Meeting"
              className={styles.modal}
            />
          )}
        </li>
      </ul>
    </aside>
  );
};

export default MyDetails;