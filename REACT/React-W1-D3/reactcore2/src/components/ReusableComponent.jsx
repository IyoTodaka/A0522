import DisplayHeader from "./DisplayHeader";

export default function ReusableComponent({ studentName }) {
  return <DisplayHeader studentName={studentName} />;
  // return <h1>{studentName}</h1>;
  // if(isAuth){
  //   return <h1>Hello User</h1>
  // }else{
  //   return <h1>Hello Guest</h1>
  // }
}

// export default ReusableComponent
