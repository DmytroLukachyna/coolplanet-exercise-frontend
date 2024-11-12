import { ReactNode } from "react";
import classNames from "classnames";
import { Typography } from "@mui/material";
import styles from "./Card.module.scss";

interface CardProps {
  title?: string;
  className?: string;
  children: ReactNode;
}

const Card = ({ title, className, children }: CardProps) => (
  <div className={classNames(styles.card, className)}>
    {title && (
      <Typography textAlign="center" variant="h2" fontSize={24} fontWeight={600}>
        {title}
      </Typography>
    )}
    {children}
  </div>
);

export default Card;
