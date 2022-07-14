import CustomTextField from "../../atoms/TextField";

const index = ({ bookList, iconSrc, iconPosition }:{bookList:string[], iconSrc:string, iconPosition:string}) => {
  return (
    <>
      <CustomTextField
        data={bookList}
        iconPosition="start"
        Icon={iconSrc}
      ></CustomTextField>
      <div>
        {"suggestions"}
      </div>
    </>
  );
};

export default index;
