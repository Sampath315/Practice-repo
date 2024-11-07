const SecondRoute = ({ params }: { params: { secondRoute: string } }) => {
  console.log(params);
  return <>{params.secondRoute}</>;
};
export default SecondRoute;
