import styles from "./PersonalInfo.module.css";

function personalInfo(props) {
  const userInfo = props.user;
  const { firstName, middleName, lastName } = userInfo;

  let fullName = "";
  if (firstName) fullName += firstName;
  if (middleName) fullName += " " + middleName;
  if (lastName) fullName += " " + lastName;

  return (
    <div className={styles.personalInfo}>
      <p>{fullName}</p>
    </div>
  );
}

export default personalInfo;
