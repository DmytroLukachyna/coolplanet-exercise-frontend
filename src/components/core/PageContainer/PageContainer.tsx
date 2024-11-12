import { ReactElement, ReactNode } from "react";
import classNames from "classnames";
import styles from "./PageContainer.module.scss";

interface PageContainerProps {
  children?: ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps): ReactElement => (
  <main className={styles.outer}>
    <div className={classNames(styles.inner, className)}>{children}</div>
  </main>
);

export default PageContainer;
