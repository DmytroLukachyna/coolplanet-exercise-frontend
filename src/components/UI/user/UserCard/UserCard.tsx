"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card } from "@/components/UI/common/Card";
import { UserData } from "@/types/api/user";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import GppMaybeRoundedIcon from "@mui/icons-material/GppMaybeRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PsychologyAltRoundedIcon from "@mui/icons-material/PsychologyAltRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import { Avatar, IconButton, Typography } from "@mui/material";
import { formatDate } from "date-fns";
import styles from "./UserCard.module.scss";

interface UserCardProps {
  user: UserData;
}

const UserCard = ({ user }: UserCardProps) => {
  const router = useRouter();
  const fullName = [user.first_name, user.last_name].join(" ");

  const avatarColor = !user.avatar ? "#8c1af6" : undefined;

  const [emailVerified, setEmailVerified] = useState(user.emailVerified);

  const randomUserID = Math.floor(Math.random() * 50 + 1);

  return (
    <Card>
      <div className={styles.title}>
        <IconButton onClick={() => router.push("/users")}>
          <ChevronLeftRoundedIcon color="action" />
        </IconButton>
        <Typography textAlign="center" variant="h2" fontSize={28} fontWeight={600}>
          User information
        </Typography>
        <IconButton
          title="Go to random employee"
          onClick={() => router.push(`/users/${randomUserID}`)}
        >
          <PsychologyAltRoundedIcon color="action" />
        </IconButton>
      </div>
      <div className={styles.header}>
        {user?.avatar ? (
          <Image
            src={user.avatar}
            alt={fullName}
            width={100}
            height={100}
            className={styles.avatar}
          />
        ) : (
          <Avatar
            src={user?.avatar}
            alt={fullName}
            sx={{ bgcolor: avatarColor, width: 100, height: 100 }}
            className={styles.avatar}
          />
        )}
        <div className={styles.main}>
          <Typography fontSize={20} fontWeight={600}>
            {fullName}
          </Typography>
          <Typography>Employee ID: {user.id}</Typography>
          <div className={styles.line}>
            <CakeRoundedIcon color="action" />
            <Typography>{formatDate(user.dob, "dd MMM yyyy")}</Typography>
          </div>
        </div>
      </div>
      <div className={styles.line}>
        <BusinessRoundedIcon color="action" />
        <Typography>
          {user.company.department} at {user.company.name}
        </Typography>
      </div>
      <div className={styles.line}>
        <MailRoundedIcon color="action" />
        <div className={styles.email}>
          {emailVerified ? (
            <>
              <Link className={styles.link} href={`mailto:${user.email}`}>
                {user.email}
              </Link>
              <VerifiedUserRoundedIcon titleAccess="Email verified!" color="success" />
            </>
          ) : (
            <>
              <Typography>{user.email}</Typography>
              <IconButton
                sx={{ padding: 0 }}
                title="Click to verify email"
                aria-label="verify"
                color="warning"
                onClick={() => setEmailVerified(true)}
              >
                <GppMaybeRoundedIcon />
              </IconButton>
            </>
          )}
        </div>
      </div>
      {user.skills.length > 0 && (
        <>
          <Typography fontWeight={600}>Skills:</Typography>
          <ul className={styles.list}>
            {user.skills.map((skill) => (
              <li className={styles.listItem} key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </>
      )}
    </Card>
  );
};

export default UserCard;
